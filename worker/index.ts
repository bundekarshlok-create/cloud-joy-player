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

      const res = await fetch(
        `https://terabox-downloader-online-viewer-player-api.p.rapidapi.com/rapidapi?url=${encodeURIComponent(
          targetUrl
        )}`,
        {
          headers: {
            "x-rapidapi-host": "terabox-downloader-online-viewer-player-api.p.rapidapi.com",
            "x-rapidapi-key": "<83791e6b73mshd6a661db418b677p1ab880jsn7b59ca3ba66f>", // yahan apna RapidAPI key daal
          },
        }
      );

      const data = await res.json();

      // Ensure response has a video key
      if (!data || !data.video) {
        return new Response(JSON.stringify({ error: "No playable video found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ video: data.video }), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: (err as Error).message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
