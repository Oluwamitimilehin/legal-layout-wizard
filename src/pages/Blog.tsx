import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Understanding Your Rights in the Workplace",
      excerpt: "Learn about fundamental employee rights and how to recognize when they're being violated.",
      author: "Robert Parker",
      date: "March 15, 2024",
      category: "Labor Law",
    },
    {
      title: "The Importance of Legal Representation in Criminal Cases",
      excerpt: "Why having experienced legal counsel can make all the difference in criminal proceedings.",
      author: "Jennifer Brown",
      date: "March 10, 2024",
      category: "Criminal Defense",
    },
    {
      title: "Navigating Wrongful Termination Claims",
      excerpt: "A comprehensive guide to understanding and pursuing wrongful termination cases.",
      author: "Michael Chen",
      date: "March 5, 2024",
      category: "Employment Law",
    },
    {
      title: "What to Do If You're Arrested",
      excerpt: "Essential steps to protect your rights and improve your legal position after an arrest.",
      author: "Sarah Williams",
      date: "February 28, 2024",
      category: "Criminal Defense",
    },
    {
      title: "Workplace Discrimination: Know Your Protections",
      excerpt: "An overview of federal and state laws protecting employees from discrimination.",
      author: "Robert Parker",
      date: "February 20, 2024",
      category: "Labor Law",
    },
    {
      title: "The Appeals Process in Criminal Cases",
      excerpt: "Understanding how criminal appeals work and when they might be appropriate.",
      author: "Jennifer Brown",
      date: "February 15, 2024",
      category: "Criminal Defense",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-primary">
              Legal Insights & News
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay informed with the latest legal updates, case studies, and expert advice 
              from our team of experienced attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-accent/10 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to our newsletter for the latest legal insights and firm news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
