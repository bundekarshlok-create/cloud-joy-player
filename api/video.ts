import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const targetUrl = req.query.url as string;
    if (!targetUrl) {
      return res.status(400).json({ error: "No URL provided" });
    }

    const response = await fetch(
      `https://terabox-downloader-online-viewer-player-api.p.rapidapi.com/rapidapi?url=${encodeURIComponent(targetUrl)}`,
      {
        headers: {
          "x-rapidapi-host": "terabox-downloader-online-viewer-player-api.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,  // Vercel env variable
        },
      }
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
