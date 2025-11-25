import fs from "fs";
import path from "path";
import { pipeline } from "@xenova/transformers";

const trainPath = path.join(process.cwd(), "src/data/train.json");

// Load training data
const trainData = JSON.parse(fs.readFileSync(trainPath, "utf-8"));

let embedder = null;
let questionVectors = [];
let answers = [];

/****************************
 * FIXED: Universal converter
 ****************************/
function toVector(output) {
  // Case 1 → Tensor object { data: Float32Array }
  if (output && output.data) {
    return Array.from(output.data);
  }

  // Case 2 → TypedArray (Float32Array)
  if (ArrayBuffer.isView(output)) {
    return Array.from(output);
  }

  // Case 3 → Array (maybe nested)
  if (Array.isArray(output)) {
    return output.flatMap(toVector);
  }

  throw new Error("❌ Unknown embedding output format");
}

/****************************
 * Cosine similarity
 ****************************/
function cosine(a, b) {
  let dot = 0,
    na = 0,
    nb = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }

  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

/****************************
 * Load embedding model + train
 ****************************/
export async function loadModel() {
  console.log("⏳ Loading embedding model...");
  embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  console.log("🤖 Model loaded!");

  // Convert all questions into vectors
  for (let pair of trainData) {
    const embedding = await embedder(pair.question);
    const vector = toVector(embedding);

    questionVectors.push(vector);
    answers.push(pair.answer);
  }

  console.log("🧠 Training completed:", questionVectors.length, "questions");
}

/****************************
 * Get best matching answer
 ****************************/
export async function getAnswer(question) {
  const result = await embedder(question);
  const qVec = toVector(result);

  let bestScore = -1;
  let bestIndex = -1;

  for (let i = 0; i < questionVectors.length; i++) {
    const score = cosine(qVec, questionVectors[i]);

    if (score > bestScore) {
      bestScore = score;
      bestIndex = i;
    }
  }

  // Threshold check
  if (bestScore < 0.20) {
    return "Sorry, no matching answer found in trained data.";
  }

  return answers[bestIndex];
}
