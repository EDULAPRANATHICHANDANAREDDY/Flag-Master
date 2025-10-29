import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  try {
    const csvPath = path.join(process.cwd(), "flags.csv");
    const csvData = await fs.readFile(csvPath, "utf8");

    const lines = csvData.trim().split("\n").slice(1);
    const flags = lines.map(line => {
      const [id, name, flag] = line.split(",");
      return { id, name, flag };
    });

    const random = flags[Math.floor(Math.random() * flags.length)];
    res.status(200).json({ question: random });
  } catch (err) {
    res.status(500).json({ error: "Failed to load flags" });
  }
}
