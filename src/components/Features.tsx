
import { Check, Users, Repeat, Medal, Scale } from "lucide-react";

const features = [
  {
    title: "Personalized Training",
    description: "Custom workout plans designed specifically for your body, goals, and lifestyle.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=300&fit=crop"
  },
  {
    title: "Regular Progress Tracking",
    description: "Consistent assessments to monitor improvements and adjust your program as needed.",
    icon: Repeat,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&h=300&fit=crop"
  },
  {
    title: "Expert Nutrition Guidance",
    description: "Learn how to fuel your body for optimal performance and recovery.",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop"
  },
  {
    title: "Results Guaranteed",
    description: "Our proven methods ensure you'll see the changes you're working for.",
    icon: Medal,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&h=300&fit=crop"
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The FitPro Advantage
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          We combine personalized training, expert guidance, and proven methods to help you achieve lasting results.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className="text-neutral-600 mb-4">{feature.description}</p>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-8">Our Premium Equipment</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=400&h=300&fit=crop" 
              alt="Dumbbells" 
              className="w-full h-40 object-cover"
            />
            <p className="p-3 text-center font-medium">Free Weights</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=300&fit=crop" 
              alt="Squat rack" 
              className="w-full h-40 object-cover"
            />
            <p className="p-3 text-center font-medium">Power Racks</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1591291621164-2c6367723315?w=400&h=300&fit=crop" 
              alt="Cardio equipment" 
              className="w-full h-40 object-cover"
            />
            <p className="p-3 text-center font-medium">Cardio Machines</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1598289431512-b91a5feae985?w=400&h=300&fit=crop" 
              alt="Kettlebells" 
              className="w-full h-40 object-cover"
            />
            <p className="p-3 text-center font-medium">Functional Training</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
