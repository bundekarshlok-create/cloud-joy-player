// worker/index.ts
export default {
  async fetch(request: Request) {
    try {
      const url = new URL(request.url);
      const targetUrl = url.searchParams.get("url");

      if (!targetUrl) {
        return new Response(JSON.stringify({ error: "No URL provided" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      // RapidAPI call
      const res = await fetch(
        `https://terabox-downloader-online-viewer-player-api.p.rapidapi.com/rapidapi?url=${encodeURIComponent(
          targetUrl
        )}`,
        {
          headers: {
            "x-rapidapi-host": "terabox-downloader-online-viewer-player-api.p.rapidapi.com",
            "x-rapidapi-key": "83791e6b73mshd6a661db418b677p1ab880jsn7b59ca3ba66f", // <-- Yahan apni key daal
          },
        }
      );

      const data = await res.json();

      // Frontend ke liye video link extract
      const videoUrl =
        data?.video || data?.files?.[0]?.link || data?.download?.[0]?.url || null;

      if (!videoUrl) {
        return new Response(JSON.stringify({ error: "Video not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Frontend ko JSON me "video" property ke sath return karo
      return new Response(JSON.stringify({ video: videoUrl }), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err: any) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
