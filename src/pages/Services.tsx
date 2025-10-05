import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Scale, 
  Shield, 
  FileText, 
  Users, 
  Gavel 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Employment Law",
      description: "Comprehensive representation for workplace discrimination, wrongful termination, harassment, and wage disputes.",
      details: [
        "Wrongful termination claims",
        "Workplace discrimination",
        "Sexual harassment cases",
        "Wage and hour disputes",
        "Employment contract negotiations",
      ],
    },
    {
      icon: Scale,
      title: "Labor Relations",
      description: "Expert guidance in union negotiations, collective bargaining, and labor dispute resolution.",
      details: [
        "Union representation",
        "Collective bargaining agreements",
        "Labor dispute mediation",
        "NLRB proceedings",
        "Strike and lockout issues",
      ],
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Aggressive defense for all criminal charges, from misdemeanors to serious felonies.",
      details: [
        "White collar crimes",
        "Drug offenses",
        "Assault and battery",
        "Theft and fraud",
        "DUI/DWI defense",
      ],
    },
    {
      icon: Gavel,
      title: "Criminal Appeals",
      description: "Strategic appellate representation to challenge convictions and fight for justice.",
      details: [
        "Post-conviction relief",
        "Sentence reduction",
        "Constitutional violations",
        "Ineffective counsel claims",
        "Evidence challenges",
      ],
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Thorough preparation and review of all legal documents to protect your interests.",
      details: [
        "Contract review and drafting",
        "Legal research and analysis",
        "Discovery and depositions",
        "Motion preparation",
        "Trial preparation",
      ],
    },
    {
      icon: Users,
      title: "Client Consultation",
      description: "Personalized consultations to understand your situation and develop winning strategies.",
      details: [
        "Initial case evaluation",
        "Legal strategy development",
        "Risk assessment",
        "Regular case updates",
        "24/7 client support",
      ],
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
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive legal services in labor law and criminal defense, 
              delivered with expertise, dedication, and a commitment to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-6">
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            Need Legal Assistance?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our experienced attorneys are ready to help you navigate your legal challenges. 
            Contact us today for a consultation.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
