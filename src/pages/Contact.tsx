
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Instagram, Facebook, Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-16 container-padding bg-primary text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-lg text-neutral-300 mb-8 text-center max-w-2xl mx-auto">
              Ready to transform your fitness journey? We're here to help you get started.
            </p>
          </div>
        </section>
        
        <section className="py-16 container-padding">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors w-full flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-neutral-600">
                        <a href="tel:+2389834323" className="hover:text-secondary transition-colors">
                          +238-983-4323
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-neutral-600">
                        <a href="mailto:lennondossantos808@gmail.com" className="hover:text-secondary transition-colors">
                          lennondossantos808@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Location</h3>
                      <p className="text-neutral-600">
                        123 Fitness Street, Healthyville
                      </p>
                      <p className="text-neutral-600">
                        Open Monday-Friday: 6am-8pm<br />
                        Saturday-Sunday: 8am-4pm
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                      <a 
                        href="https://instagram.com/thereallemonsqueeze" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Instagram className="text-primary w-6 h-6" />
                      </a>
                      <a 
                        href="https://facebook.com/lennondossantos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Facebook className="text-primary w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-4">Our Location</h3>
                  <div className="rounded-xl overflow-hidden shadow-lg h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=600&h=400&fit=crop" 
                      alt="Gym location" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
