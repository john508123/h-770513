
const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">FitPro</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-neutral-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#trainers" className="text-neutral-300 hover:text-white transition-colors">Our Trainers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Weight Loss</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Muscle Building</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Nutrition Coaching</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Fitness Blog</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Workout Videos</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Meal Plans</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-neutral-300">123 Fitness Street, Healthyville</li>
              <li className="text-neutral-300">info@fitpro.com</li>
              <li className="text-neutral-300">(555) 123-4567</li>
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
