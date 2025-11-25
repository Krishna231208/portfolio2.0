export async function saveExtractedText(text, savePath) {
  return fs.writeFileSync(savePath, text, "utf-8");
}
