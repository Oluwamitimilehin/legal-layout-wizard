import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const MEDIUM_FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@llassisephillips";

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const res = await fetch(MEDIUM_FEED_URL);
        const data = await res.json();
        if (data.status === "ok" && Array.isArray(data.items)) {
          setPosts(data.items);
        } else {
          console.error("Unexpected feed structure:", data);
        }
      } catch (error) {
        console.error("Error fetching Medium RSS feed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  const stripHtml = (html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const extractImage = (html: string) => {
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  const imageUrl = match ? match[1] : null;
  // Return null if no image found, so we can handle it gracefully later
  return imageUrl;
};


  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-primary">
            Our Insights & Perspectives
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into our expert articles, in-depth case reviews, and authoritative commentary on the latest tax and legal issues. We also share thought-provoking general discourse on current affairs. Stay informed. Stay ahead.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            // Skeleton Loaders
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="w-full h-56" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-1/4" />
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                    <Skeleton className="h-10 w-full" />
                  </div>
                </Card>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {posts.slice(0, visibleCount).map((post, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative w-full h-56 overflow-hidden">
                     
                      <div className="relative w-full h-56 overflow-hidden bg-gradient-to-b from-muted/40 to-muted flex items-center justify-center">
  {extractImage(post.description) ? (
    <img
      src={extractImage(post.description) || "/placeholder-blog.jpg"}
      alt={post.title}
      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
      onError={(e) => (e.currentTarget.src = "/placeholder-blog.jpg")}
    />
  ) : (
    <img
      src="/placeholder-blog.jpg"
      alt="Placeholder"
      className="object-cover w-full h-full opacity-70"
    />
  )}
</div>

                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {stripHtml(post.description).slice(0, 120)}...
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.pubDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <Button
                        asChild
                        variant="ghost"
                        className="w-full group-hover:bg-accent/10 transition-colors"
                      >
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {visibleCount < posts.length && (
                <div className="text-center mt-12">
                  <Button
                    size="lg"
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 transition"
                  >
                    Load More Posts
                  </Button>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-muted-foreground">No Medium posts found.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
