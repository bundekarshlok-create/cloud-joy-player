import React, { useEffect, useState } from "react";

export default function VideoPlayer() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ye teraBox URL change karo agar tumhare link alag ho
  const teraBoxUrl = "https://teraboxapp.com/s/1EWkWY66FhZKS2WfxwBgd0Q";

  useEffect(() => {
    async function fetchVideo() {
      try {
        const res = await fetch(
          `https://cloud-joy-backend.bundekarshlok.workers.dev/?url=${encodeURIComponent(
            teraBoxUrl
          )}`
        );
        const data = await res.json();

        // Assuming backend response me direct video link aa raha hai
        // Agar backend different format me data bhejta hai, yahan adjust karna
        if (data && data.video) {
          setVideoUrl(data.video);
        } else {
          setError("Video link not found");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch video");
      } finally {
        setLoading(false);
      }
    }

    fetchVideo();
  }, []);

  if (loading) return <p>Loading video...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <video width="100%" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
