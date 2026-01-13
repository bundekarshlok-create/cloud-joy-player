import { Zap, Shield, Globe, Download, MonitorPlay, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Stream videos instantly without waiting for downloads. Our servers fetch content in seconds."
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "No data stored on our servers. Your privacy is our priority with encrypted connections."
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Access from any device, any browser. Mobile, tablet, or desktop - we've got you covered."
  },
  {
    icon: MonitorPlay,
    title: "HD Quality",
    description: "Watch videos in their original quality. Support for all resolutions up to 4K."
  },
  {
    icon: Download,
    title: "No Downloads",
    description: "Stream directly in your browser. Save storage space and watch immediately."
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Our service runs around the clock. Watch your content whenever you want."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">TeraPlay</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The fastest and most reliable way to stream your Terabox content without hassle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
