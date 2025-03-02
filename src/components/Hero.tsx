
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 container-padding bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Simplifying Payments for Growing Business
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Streamline your payment processes and focus on what matters most - growing your business. Simple, secure, and seamless.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-16 glass-card rounded-xl p-4 max-w-4xl mx-auto animate-float">
        <img 
          src="/lovable-uploads/69bd4d22-1819-4ba0-b712-b17bdfc2acf9.png"
          alt="Lovable Dev Preview"
          className="rounded-lg w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
