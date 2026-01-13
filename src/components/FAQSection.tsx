import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is TeraPlay free to use?",
    answer: "Yes, TeraPlay is completely free to use. You can stream unlimited Terabox videos without any subscription or payment required."
  },
  {
    question: "Which Terabox links are supported?",
    answer: "We support all major Terabox domains including terabox.com, teraboxapp.com, 1024tera.com, freeterabox.com, and teraboxlink.com."
  },
  {
    question: "Do you store my videos or data?",
    answer: "No, we don't store any videos or personal data on our servers. We simply fetch and stream the content directly from Terabox's servers."
  },
  {
    question: "What video quality is supported?",
    answer: "TeraPlay supports all video qualities available on Terabox, including SD, HD, Full HD (1080p), and 4K when available."
  },
  {
    question: "Can I download videos using TeraPlay?",
    answer: "TeraPlay is designed for streaming only. For downloading, please use the original Terabox platform or their official apps."
  },
  {
    question: "Why isn't my video playing?",
    answer: "Make sure your link is a valid Terabox share link. Some private or password-protected files may not be accessible. Try refreshing and pasting the link again."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about TeraPlay.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-border/50 px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
