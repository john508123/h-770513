
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Quote } from "lucide-react";

const stories = [
  {
    name: "Sarah Johnson",
    achievement: "Lost 30 lbs in 6 months",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop",
    quote: "Working with FitPro transformed my life! I've lost 30 pounds and gained so much confidence. The personalized workout plans were exactly what I needed. Their approach to nutrition made it easy to make sustainable changes without feeling deprived. Now I have the energy to keep up with my kids and I feel amazing in my clothes!",
    before: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1630322662571-6eda571ac315?w=300&h=400&fit=crop"
  },
  {
    name: "Michael Chen",
    achievement: "Gained 15 lbs of muscle",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    quote: "As a busy executive, I needed a flexible training program. My FitPro trainer designed workouts I could do anywhere, even during business trips. Their approach helped me build significant muscle mass despite my hectic schedule. The app tracking made it easy to stay accountable even when traveling. I'm stronger now than I've ever been!",
    before: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=300&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=300&h=400&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    achievement: "Recovered from injury",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    quote: "After my pregnancy, I struggled to get back in shape. FitPro created a post-natal fitness plan that was safe and effective. I'm stronger than before! The trainers really understood my concerns about diastasis recti and pelvic floor issues. Their expertise helped me rebuild my core strength safely, and now I'm back to all my favorite activities.",
    before: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=300&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1604480133435-25b86862d276?w=300&h=400&fit=crop"
  },
  {
    name: "David Williams",
    achievement: "Completed first marathon",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=300&fit=crop",
    quote: "I always wanted to run a marathon but never thought I could do it. With my FitPro coach's structured training plan and constant encouragement, I not only completed my first marathon but did it in under 4 hours! The gradual progression in my training prevented injuries, and the nutrition guidance gave me the energy I needed for those long runs.",
    before: "https://images.unsplash.com/photo-1624885751189-29b77e1711ea?w=300&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=300&h=400&fit=crop"
  }
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-16 container-padding bg-primary text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Success Stories</h1>
            <p className="text-lg text-neutral-300 mb-8 text-center max-w-2xl mx-auto">
              Real people, real results. See how our clients transformed their lives through dedication and proper guidance.
            </p>
          </div>
        </section>
        
        <section className="py-16 container-padding">
          <div className="max-w-5xl mx-auto">
            {stories.map((story, index) => (
              <div key={index} className={`mb-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="glass-card p-8 rounded-xl mb-12">
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-2xl font-bold">{story.name}</h2>
                      <p className="text-secondary font-medium">{story.achievement}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    <Quote className="text-secondary flex-shrink-0 w-8 h-8" />
                    <p className="text-lg text-neutral-600 italic">
                      {story.quote}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-3">Before</p>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img src={story.before} alt={`${story.name} before`} className="w-full h-[400px] object-cover" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-3">After</p>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img src={story.after} alt={`${story.name} after`} className="w-full h-[400px] object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="py-16 container-padding bg-neutral-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join the hundreds of clients who have transformed their lives with FitPro. Your journey begins with a single step.
            </p>
            <a href="/contact" className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors inline-block">
              Start Your Transformation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;
