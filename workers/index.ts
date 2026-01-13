export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    const teraboxUrl = url.searchParams.get("url");

    if (!teraboxUrl) {
      return new Response(
        JSON.stringify({ error: "Missing terabox url" }),
        { status: 400 }
      );
    }

    const apiUrl =
      "https://terabox-downloader-online-viewer-player-api.p.rapidapi.com/rapidapi?url=" +
      encodeURIComponent(teraboxUrl);

    const res = await fetch(apiUrl, {
      headers: {
        "x-rapidapi-host":
          "terabox-downloader-online-viewer-player-api.p.rapidapi.com",
        "x-rapidapi-key": env.RAPIDAPI_KEY
      }
    });

    const data = await res.text();

    return new Response(data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};

interface Env {
  RAPIDAPI_KEY: string;
}
