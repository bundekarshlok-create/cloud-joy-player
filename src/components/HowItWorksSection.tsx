import { Link, Search, Play, Check } from "lucide-react";

const steps = [
  {
    icon: Link,
    step: "01",
    title: "Copy Your Link",
    description: "Get the share link from your Terabox file or folder."
  },
  {
    icon: Search,
    step: "02", 
    title: "Paste & Fetch",
    description: "Paste the link into our player and click the play button."
  },
  {
    icon: Play,
    step: "03",
    title: "Watch Instantly",
    description: "Enjoy your video in high quality directly in the browser."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start streaming in just 3 simple steps. No registration required.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
            
            {steps.map((step, index) => (
              <div key={step.step} className="relative text-center group">
                <div className="relative z-10 w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary to-card flex items-center justify-center border border-border group-hover:border-primary/50 transition-all duration-300">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <step.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
