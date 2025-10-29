import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scale, Shield, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-law-building.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      icon: Scale,
      title: "Taxation and Regulatory Advisory",
      description: "Comprehensive tax planning, compliance, and representation before the Tax Appeal Tribunal and appellate courts.",
    },
    {
      icon: Shield,
      title: "Dispute Resolution and Recovery",
      description: "Pragmatic and results-driven handling of commercial, tax, and financial disputes through litigation and alternative dispute resolution.",
    },
    {
      icon: Users,
      title: "Corporate and Commercial Law",
      description: "Structuring, transactions, and regulatory support for businesses across diverse sectors.",
    },
    {
      icon: Award,
      title: "Banking, Finance, and Transaction Support",
      description: "Advisory on corporate finance, securitisation, syndicated lending, and due diligence for financial institutions and investors.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Old Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.5)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Insight. Integrity. Impact.
          </h1>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-8 text-accent">
            Navigating complex legal challenges with clarity, strategy, and personal attention.
          </h2>
          <Link to="/about">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Introducing Our Law Firm
            </h2>
            <div className="text-lg space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The Law Gates is a modern, forward-thinking law firm built on a foundation of expertise, integrity, and client focus. We combine academic excellence, courtroom experience, and regulatory insight to deliver practical, effective solutions tailored to each client’s unique needs. 
              </p>
              <p>
                Since our founding, we have earned a reputation for clarity, professionalism, and results. Our approach is simple: we listen carefully, provide advice that makes sense, and guide our clients confidently through every legal challenge.
              </p>
              <p>
                Whether navigating complex tax matters, corporate disputes, or complementary legal services, our team is committed to making a meaningful impact — always with your best interests in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Our Practice Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-primary text-primary-foreground"> */}
      <section className="py-20 text-primary-foreground" style={{ backgroundColor: "#2e3095" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Let’s start your consultation today. We don’t just act for our clients, we stand with them to achieve exceptional results.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
