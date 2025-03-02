
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-lg border-b border-neutral-800">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-white">
          Fit<span className="text-secondary">Pro</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">
            About
          </Link>
          <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
            Services
          </Link>
          <Link to="/success-stories" className="text-neutral-300 hover:text-white transition-colors">
            Success Stories
          </Link>
          <Link to="/pricing" className="text-neutral-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">
            Contact
          </Link>
          <Link to="/contact" className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors">
            Free Consultation
          </Link>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-primary/95 backdrop-blur-lg border-b border-neutral-800">
          <div className="container-padding py-4 flex flex-col gap-4">
            <Link 
              to="/about" 
              className="text-neutral-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-neutral-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/success-stories" 
              className="text-neutral-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link 
              to="/pricing" 
              className="text-neutral-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="text-neutral-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
