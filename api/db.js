import fs from "fs/promises";
import path from "path";

export async function loadFlags() {
  const csvPath = path.join(process.cwd(), "flags.csv");
  const csvData = await fs.readFile(csvPath, "utf8");

  const lines = csvData.trim().split("\n").slice(1);
  return lines.map(line => {
    const [id, name, flag] = line.split(",");
    return { id, name, flag };
  });
}
