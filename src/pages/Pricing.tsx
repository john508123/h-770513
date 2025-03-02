
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/session",
    features: [
      "1 Session Per Week",
      "Initial Fitness Assessment",
      "Basic Workout Plan",
      "Email Support",
      "Month-to-Month Commitment"
    ],
    featured: false
  },
  {
    name: "Premium",
    price: "$39",
    period: "/session",
    features: [
      "2 Sessions Per Week",
      "Comprehensive Fitness Assessment",
      "Customized Workout Plan",
      "Basic Nutrition Guidance",
      "Unlimited Messaging Support",
      "3-Month Commitment"
    ],
    featured: true
  },
  {
    name: "Elite",
    price: "$35",
    period: "/session",
    features: [
      "3+ Sessions Per Week",
      "Advanced Fitness Assessment",
      "Fully Customized Workout Plan",
      "Detailed Nutrition Coaching",
      "24/7 Support",
      "Progress Tracking App",
      "6-Month Commitment"
    ],
    featured: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-16 container-padding bg-primary text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Training Packages</h1>
            <p className="text-lg text-neutral-300 mb-8 text-center max-w-2xl mx-auto">
              Invest in yourself with our flexible training options designed to fit your needs and budget
            </p>
          </div>
        </section>
        
        <section className="py-16 container-padding">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`glass-card p-8 rounded-xl relative ${plan.featured ? 'border-2 border-secondary' : ''}`}>
                  {plan.featured && (
                    <span className="absolute -top-4 right-4 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-neutral-500">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="text-secondary mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact" 
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                      plan.featured 
                        ? 'bg-secondary text-white hover:bg-secondary/90' 
                        : 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300'
                    }`}
                  >
                    Choose Plan
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-16 glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Custom Packages</h3>
              <p className="text-lg text-neutral-600 mb-6">
                Need something more specialized? We offer custom packages tailored to your specific goals, time constraints, and preferences.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Sport-Specific Training</h4>
                  <p className="mb-4 text-neutral-600">Training programs designed to enhance performance in your chosen sport, whether you're a weekend warrior or competitive athlete.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="text-secondary mt-1 flex-shrink-0" />
                      <span>Customized to your sport's specific demands</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-secondary mt-1 flex-shrink-0" />
                      <span>Skill enhancement and injury prevention</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Group & Partner Training</h4>
                  <p className="mb-4 text-neutral-600">Train with friends or family members at discounted rates. Great for accountability and making fitness a social activity.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="text-secondary mt-1 flex-shrink-0" />
                      <span>Discounted per-person rates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-secondary mt-1 flex-shrink-0" />
                      <span>Customized group activities</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a href="/contact" className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors inline-flex items-center gap-2">
                  Contact Us for Custom Packages
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 container-padding bg-neutral-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">How often should I work with a trainer?</h3>
                <p className="text-neutral-600">For best results, we recommend 2-3 sessions per week, especially when starting out. This frequency provides the right balance of guidance and recovery time. As you progress, we can adjust the frequency based on your goals and schedule.</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Can I change my package after signing up?</h3>
                <p className="text-neutral-600">Absolutely! We understand that needs change. You can upgrade or modify your package at any time. If you find you need more or less sessions, or want to add nutrition coaching, just let us know and we'll make the adjustment.</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Is there a cancellation policy?</h3>
                <p className="text-neutral-600">Yes, we require 24-hour notice for session cancellations to avoid being charged for the session. We understand emergencies happen, so we allow one late cancellation per month without penalty.</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Do you offer a satisfaction guarantee?</h3>
                <p className="text-neutral-600">Yes! We're confident in our training methods and are committed to your success. If you're not satisfied with your first session, it's free, and we'll work with you to find a better fit or refund your initial payment.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
