import type { NextApiRequest, NextApiResponse } from "next";

const RAPIDAPI_HOST = "terabox-downloader-online-viewer-player-api.p.rapidapi.com";
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY; // ✅ Vercel env variable

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "No URL provided" });
  }

  try {
    const response = await fetch(
      `https://${RAPIDAPI_HOST}/rapidapi?url=${encodeURIComponent(url)}`,
      {
        headers: {
          "x-rapidapi-host": RAPIDAPI_HOST,
          "x-rapidapi-key": RAPIDAPI_KEY!,
        },
      }
    );

    const data = await response.json();
    console.log("RapidAPI Response:", data);

    if (!data || !data.video) {
      return res.status(404).json({ error: "Backend did not return a playable video." });
    }

    res.status(200).json({ video: data.video });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch video from backend." });
  }
}
