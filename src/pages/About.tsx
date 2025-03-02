
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-16 container-padding bg-primary text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About FitPro</h1>
            <p className="text-lg text-neutral-300 mb-8 text-center">Your journey to a healthier you starts here</p>
          </div>
        </section>
        
        <section className="py-16 container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-neutral-600 mb-4">
                  At FitPro, we believe fitness is more than just physical – it's a lifestyle that empowers you to be your best self. Our certified personal trainers bring years of experience and a passion for helping clients achieve lasting results.
                </p>
                <p className="text-lg text-neutral-600 mb-4">
                  What sets us apart is our commitment to personalization. We know that everyone's body is different, which is why we create custom workout and nutrition plans tailored to your unique needs, goals, and lifestyle.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" alt="Personal trainer with client" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 container-padding bg-neutral-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Trainers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl text-center">
                <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300&h=300&fit=crop" alt="Trainer James" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold mb-2">James Wilson</h3>
                <p className="text-secondary font-medium mb-3">Strength Specialist</p>
                <p className="text-neutral-600">Certified with 8+ years of experience helping clients build muscle and increase strength.</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <img src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=300&h=300&fit=crop" alt="Trainer Sarah" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
                <p className="text-secondary font-medium mb-3">Nutrition Coach</p>
                <p className="text-neutral-600">Specialized in crafting nutrition plans that complement your workouts for maximum results.</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <img src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=300&h=300&fit=crop" alt="Trainer Michael" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold mb-2">Michael Rodriguez</h3>
                <p className="text-secondary font-medium mb-3">Cardio & HIIT Expert</p>
                <p className="text-neutral-600">Passionate about helping clients improve endurance and burn fat with high-intensity workouts.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Facility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop" alt="Weight room" className="w-full h-64 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop" alt="Cardio equipment" className="w-full h-64 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=600&h=400&fit=crop" alt="Functional training area" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
