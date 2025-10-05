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
      title: "Labor Law",
      description: "Expert representation in employment disputes, workplace discrimination, and labor relations.",
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Aggressive defense for all criminal charges with a proven track record of success.",
    },
    {
      icon: Users,
      title: "Personal Consultation",
      description: "One-on-one consultations to understand your unique legal situation and needs.",
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Over 30 years of combined experience serving clients with dedication and integrity.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
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
            Founded in 1992,
          </h1>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6">
            Parker & Brown Specializes in
          </h2>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-8 text-accent">
            Labor and Criminal Law
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Parker & Brown, we understand that legal matters can be overwhelming and stressful. 
              That's why we're committed to providing personalized, strategic legal representation that 
              puts your needs first. With over three decades of experience, our team has successfully 
              represented thousands of clients in complex labor disputes and criminal defense cases.
            </p>
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a consultation with our experienced attorneys today. 
            We're here to listen, advise, and fight for your rights.
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
