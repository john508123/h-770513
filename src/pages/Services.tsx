
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight, Check } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-16 container-padding bg-primary text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Services</h1>
            <p className="text-lg text-neutral-300 mb-8 text-center max-w-2xl mx-auto">
              Comprehensive fitness solutions tailored to your unique goals and lifestyle
            </p>
          </div>
        </section>
        
        <section className="py-16 container-padding">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop" alt="Personal training session" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">One-on-One Training</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Our signature service provides you with dedicated, personalized attention from an expert trainer who will design and guide you through workouts specifically tailored to your goals, fitness level, and preferences.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-secondary mt-1 flex-shrink-0" />
                    <span>Customized workout plans updated regularly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-secondary mt-1 flex-shrink-0" />
                    <span>Real-time form correction and technique guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-secondary mt-1 flex-shrink-0" />
                    <span>Accountability and motivation to keep you on track</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-secondary mt-1 flex-shrink-0" />
                    <span>Progress tracking and regular assessments</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Nutrition Coaching</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Get a customized nutrition plan that complements your fitness routine. Learn how to make sustainable dietary changes that fuel your workouts and support your goals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-secondary mt-1 flex-shrink-0" />
                    <span>Personalized meal planning based on your preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-secondary mt-1 flex-shrink-0" />
                    <span>Guidance on proper nutrition timing around workouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-secondary mt-1 flex-shrink-0" />
                    <span>Education on macronutrients and micronutrients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-secondary mt-1 flex-shrink-0" />
                    <span>Grocery shopping lists and meal prep strategies</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop" alt="Healthy meal prep" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=400&fit=crop" alt="Small group training" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Small Group Training</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Train with a friend or join a small group for a more affordable option that still offers personalized attention and the added motivation of group dynamics.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-secondary mt-1 flex-shrink-0" />
                    <span>2-4 people per group for optimal attention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-secondary mt-1 flex-shrink-0" />
                    <span>Fun, motivating environment with friendly competition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-secondary mt-1 flex-shrink-0" />
                    <span>Cost-effective way to work with a professional trainer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-secondary mt-1 flex-shrink-0" />
                    <span>Specialized group programs for different goals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 container-padding bg-neutral-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Specialized Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl">
                <div className="bg-secondary/10 p-3 rounded-lg inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Weight Loss</h3>
                <p className="text-neutral-600">Strategic combination of cardio, strength training, and nutrition guidance designed to help you shed pounds in a healthy, sustainable way.</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="bg-secondary/10 p-3 rounded-lg inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Muscle Building</h3>
                <p className="text-neutral-600">Progressive resistance training and optimized nutrition protocols designed to help you gain lean muscle mass and increase strength.</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="bg-secondary/10 p-3 rounded-lg inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sports Performance</h3>
                <p className="text-neutral-600">Sport-specific training to enhance your performance in your chosen athletic pursuit, focusing on relevant skills and conditioning.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a href="/contact" className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors inline-flex items-center gap-2">
                Book a Free Consultation 
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
