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

      const res = await fetch(
        `https://terabox-downloader-online-viewer-player-api.p.rapidapi.com/rapidapi?url=${encodeURIComponent(
          targetUrl
        )}`,
        {
          headers: {
            "x-rapidapi-host": "terabox-downloader-online-viewer-player-api.p.rapidapi.com",
            "x-rapidapi-key": "<YOUR_RAPIDAPI_KEY>",
          },
        }
      );

      const data = await res.json();

      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
