export async function getVideoData(teraBoxUrl) {
  const BACKEND_URL = "https://cloud-joy-backend.bundekarshlok.workers.dev";

  try {
    const res = await fetch(`${BACKEND_URL}/?url=` + encodeURIComponent(teraBoxUrl));
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Backend error:", err);
    return null;
  }
}
