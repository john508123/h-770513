
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">FitPro</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/success-stories" className="text-neutral-300 hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/pricing" className="text-neutral-300 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Weight Loss</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Muscle Building</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Nutrition Coaching</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Group Training</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://instagram.com/thereallemonsqueeze" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  @thereallemonsqueeze
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com/lennondossantos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4" />
                  Lennon Dos Santos
                </a>
              </li>
              <li>
                <a 
                  href="mailto:lennondossantos808@gmail.com" 
                  className="text-neutral-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  lennondossantos808@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+2389834323" 
                  className="text-neutral-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +238-983-4323
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-neutral-300">123 Fitness Street, Healthyville</li>
              <li className="text-neutral-300">Hours: Mon-Fri 6am-8pm</li>
              <li className="text-neutral-300">Sat-Sun 8am-4pm</li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 text-center">
            © 2024 FitPro Personal Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
