
const testimonials = [
  {
    quote: "Working with FitPro transformed my life! I've lost 30 pounds and gained so much confidence. The personalized workout plans were exactly what I needed.",
    author: "Sarah Johnson",
    role: "Lost 30 lbs in 6 months",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
  {
    quote: "As a busy executive, I needed a flexible training program. My FitPro trainer designed workouts I could do anywhere, even during business trips.",
    author: "Michael Chen",
    role: "Busy Professional",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote: "After my pregnancy, I struggled to get back in shape. FitPro created a post-natal fitness plan that was safe and effective. I'm stronger than before!",
    author: "Elena Rodriguez",
    role: "New Mom",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 container-padding bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Success Stories
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          See how our personalized training has helped clients achieve their fitness goals.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <p className="text-neutral-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
