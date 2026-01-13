import { useState } from "react";
import { Play, Loader2, Link as LinkIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

const BACKEND_URL = "https://cloud-joy-backend.bundekarshlok.workers.dev";

const UrlInputSection = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const isValidTeraboxUrl = (url: string) => {
    const teraboxPatterns = [
      /terabox\.com/i,
      /teraboxapp\.com/i,
      /1024tera\.com/i,
      /freeterabox\.com/i,
      /teraboxlink\.com/i,
    ];
    return teraboxPatterns.some(pattern => pattern.test(url));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      toast({ title: "Please enter a URL", description: "Paste a valid Terabox link.", variant: "destructive" });
      return;
    }

    if (!isValidTeraboxUrl(url)) {
      toast({ title: "Invalid URL", description: "Enter a valid Terabox link.", variant: "destructive" });
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      if (!data || !data.video) {
        toast({ title: "Video not found", description: "Backend did not return a playable video.", variant: "destructive" });
        setIsLoading(false);
        return;
      }

      setIsLoading(false);

      toast({ title: "Video Ready", description: "Your Terabox video is ready to play!" });

      // Yahan player me use karo: setVideoUrl(data.video)
      console.log("Video URL:", data.video);

    } catch (err) {
      setIsLoading(false);
      toast({ title: "Error", description: "Failed to fetch video from backend.", variant: "destructive" });
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="glass-card p-2 flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your Terabox link here..."
            className="pl-12 h-12 bg-secondary/50 border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
          />
        </div>
        <Button type="submit" variant="hero" size="lg" disabled={isLoading} className="h-12 min-w-[140px]">
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Play Now
            </>
          )}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        Supports terabox.com, teraboxapp.com, 1024tera.com and more
      </p>
    </form>
  );
};

export default UrlInputSection;
