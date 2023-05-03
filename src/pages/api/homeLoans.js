export default async function handler(req, res) {
  try {
    const { page } = req.query;
    const response = await fetch(
      `https://api.ratecity.com.au/v2/home-loans?page=${page}`,
      {
        headers: {
          "x-api-key": "MaDX2Oo31g3FLAHesYHtGa3rHe40uqkJ8TmbPJn9",
        },
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}
