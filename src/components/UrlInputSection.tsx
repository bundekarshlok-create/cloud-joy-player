import { useState } from "react";
import { Play, Loader2, Link as LinkIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const UrlInputSection = () => {
  const [url, setUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isValidTeraboxUrl = (url: string) => {
    return /terabox|1024tera|freeterabox/i.test(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !isValidTeraboxUrl(url)) return alert("Enter a valid Terabox link");

    setIsLoading(true);
    try {
      const res = await fetch(`/api/video?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      if (!data || !data.video) {
        alert("Backend did not return a playable video");
      } else {
        setVideoUrl(data.video);
        console.log("Video URL:", data.video);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to fetch video from backend");
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste Terabox link..."
            className="pl-10"
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <Play className="w-5 h-5" />}
          Play
        </Button>
      </form>

      {videoUrl && (
        <video controls src={videoUrl} className="mt-4 w-full rounded-lg border" />
      )}
    </div>
  );
};

export default UrlInputSection;
