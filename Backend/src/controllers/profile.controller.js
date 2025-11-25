import fs from "fs";
import path from "path";

export const getProfile = (req, res) => {
  try {
    const filePath = path.resolve("src/data/profile.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    res.json(JSON.parse(jsonData));
  } catch (error) {
    res.status(500).json({ error: "Cannot load profile" });
  }
};
