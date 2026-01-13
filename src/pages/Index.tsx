import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TeraPlay - Free Online Terabox Video Player | Stream Instantly</title>
        <meta 
          name="description" 
          content="Stream Terabox videos instantly in your browser. No downloads needed. Free, fast, and secure Terabox player supporting all video formats up to 4K quality." 
        />
        <meta 
          name="keywords" 
          content="terabox player, terabox video player, stream terabox, terabox online player, free terabox player, watch terabox videos" 
        />
        <meta property="og:title" content="TeraPlay - Free Online Terabox Video Player" />
        <meta 
          property="og:description" 
          content="Stream Terabox videos instantly in your browser. No downloads needed. Fast, free, and secure." 
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TeraPlay - Free Online Terabox Video Player" />
        <meta 
          name="twitter:description" 
          content="Stream Terabox videos instantly in your browser. No downloads needed." 
        />
        <link rel="canonical" href="https://teraplay.app" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
