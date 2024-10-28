export default async function reqHandler(req, res) {
  const { username } = req.query;
  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }
  const apiUrl = `https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=${username}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch User data");
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // If 500 response log the message from the Error object
    res.status(500).json({ error: error.message });
  }
}
