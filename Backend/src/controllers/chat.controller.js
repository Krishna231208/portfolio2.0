// import fs from "fs";
// import path from "path";
// import { embedText } from "../utils/embed.js";

// const resumePath = path.join(process.cwd(), "src/data/resume.json");

// let chunks = [];
// let vectors = [];

// // Convert JSON → single text
// function jsonToText(obj) {
//   let result = "";
//   function walk(o) {
//     if (Array.isArray(o)) return o.forEach(walk);
//     if (typeof o === "object") return Object.values(o).forEach(walk);
//     if (o) result += String(o) + " ";
//   }
//   walk(obj);
//   return result;
// }

// function chunk(text) {
//   return text.split(/(?<=\.)/g).filter(s => s.trim().length > 10);
// }

// // Train
// export async function trainChatbot(req, res) {
//   try {
//     const resume = JSON.parse(fs.readFileSync(resumePath, "utf8"));
//     const fullText = jsonToText(resume);

//     chunks = chunk(fullText);
//     vectors = [];

//     for (const c of chunks) {
//       const v = await embedText(c);
//       vectors.push(v);
//     }

//     res.json({ message: "Chatbot trained", chunks: chunks.length });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// // Cosine similarity
// function cosine(a, b) {
//   let dot = 0,
//     na = 0,
//     nb = 0;

//   for (let i = 0; i < a.length; i++) {
//     dot += a[i] * b[i];
//     na += a[i] * a[i];
//     nb += b[i] * b[i];
//   }

//   return dot / (Math.sqrt(na) * Math.sqrt(nb));
// }

// // Ask
// export async function askChatbot(req, res) {
//   try {
//     const { question } = req.body;

//     const qVec = await embedText(question);

//     let bestScore = -1;
//     let bestChunk = "I couldn't find relevant info.";

//     chunks.forEach((c, i) => {
//       const score = cosine(qVec, vectors[i]);
//       if (score > bestScore) {
//         bestScore = score;
//         bestChunk = c;
//       }
//     });

//     res.json({
//       answer: bestChunk,
//       confidence: bestScore
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }
import { loadModel, getAnswer } from "../utils/model.js";

await loadModel(); // Load model ONCE

export const askChat = async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  const answer = await getAnswer(question);
  res.json({ answer });
};

