export default async function handler(req, res) {
  try {
    const { answer, correctName } = req.body;

    const isCorrect =
      answer.trim().toLowerCase() === correctName.trim().toLowerCase();

    res.status(200).json({ wasCorrect: isCorrect });
  } catch (err) {
    res.status(400).json({ error: "Invalid submission" });
  }
}
