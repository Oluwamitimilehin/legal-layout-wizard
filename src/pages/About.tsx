import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Users, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every case, delivering results that exceed expectations.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We put your interests first in everything we do.",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "Our track record speaks for itself with countless successful outcomes for our clients.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct our practice with the highest ethical standards and transparency.",
    },
  ];

  const team = [
    {
      name: "Robert Parker",
      position: "Senior Partner",
      bio: "With 25 years of experience in labor law, Robert has successfully represented hundreds of clients in workplace disputes.",
    },
    {
      name: "Jennifer Brown",
      position: "Senior Partner",
      bio: "Jennifer specializes in criminal defense and has achieved remarkable success in complex criminal cases.",
    },
    {
      name: "Michael Chen",
      position: "Associate Attorney",
      bio: "Michael brings expertise in employment law and workers' rights, ensuring fair treatment for all clients.",
    },
    {
      name: "Sarah Williams",
      position: "Associate Attorney",
      bio: "Sarah focuses on criminal appeals and has a proven track record of overturning wrongful convictions.",
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
              About Parker & Brown
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Since 1992, we've been dedicated to providing exceptional legal representation 
              in labor and criminal law. Our commitment to justice and client satisfaction 
              has made us one of the most trusted law firms in the region.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-8 text-primary">Our History</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Parker & Brown was founded in 1992 by Robert Parker and Jennifer Brown, two passionate 
                attorneys who shared a vision of creating a law firm that truly puts clients first. 
                Starting with a small office and big dreams, they built a practice on the principles 
                of integrity, dedication, and unwavering commitment to justice.
              </p>
              <p>
                Over the past three decades, our firm has grown from a two-person operation to a 
                respected team of experienced attorneys, paralegals, and support staff. We've handled 
                thousands of cases, from simple labor disputes to complex criminal trials, always 
                maintaining the same level of personal attention and dedication that defined our 
                founding philosophy.
              </p>
              <p>
                Today, Parker & Brown stands as a testament to what can be achieved when legal 
                expertise meets genuine care for clients. We continue to evolve, embracing new 
                challenges while staying true to the values that have guided us from the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium">{member.position}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
