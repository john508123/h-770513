
const blogPosts = [
  {
    title: "5 Essential Exercises for Core Strength",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "Mar 16, 2024",
    readTime: "5 min read"
  },
  {
    title: "Nutrition Tips for Muscle Building",
    image: "/lovable-uploads/69bd4d22-1819-4ba0-b712-b17bdfc2acf9.png",
    date: "Mar 15, 2024",
    readTime: "3 min read"
  },
  {
    title: "How to Stay Motivated in Your Fitness Journey",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    date: "Mar 14, 2024",
    readTime: "4 min read"
  }
];

const Blog = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Fitness Tips & Advice
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-semibold group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
