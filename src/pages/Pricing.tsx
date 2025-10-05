import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Consultation",
      price: "Free",
      description: "Initial case evaluation and legal advice",
      features: [
        "1-hour consultation",
        "Case assessment",
        "Legal strategy overview",
        "Questions answered",
        "No obligation",
      ],
      highlighted: false,
    },
    {
      name: "Hourly Rate",
      price: "$350",
      period: "/hour",
      description: "Flexible billing for ongoing legal needs",
      features: [
        "Experienced attorney representation",
        "Detailed time tracking",
        "Regular case updates",
        "Document preparation",
        "Court appearances",
      ],
      highlighted: true,
    },
    {
      name: "Flat Fee Services",
      price: "Custom",
      description: "Fixed pricing for specific legal services",
      features: [
        "Contract review: Starting at $500",
        "Document drafting: Starting at $750",
        "Mediation services: Starting at $1,500",
        "Legal research: Starting at $400",
        "Consultation packages available",
      ],
      highlighted: false,
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
              Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe in honest, upfront pricing. No hidden fees, no surprises. 
              Just quality legal representation at fair rates.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 relative hover:shadow-xl transition-all duration-300 ${
                  pkg.highlighted ? "border-2 border-accent" : ""
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    {pkg.period && (
                      <span className="text-muted-foreground">{pkg.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block">
                  <Button
                    className="w-full"
                    variant={pkg.highlighted ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-primary text-center">
              Payment Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                  Payment Options
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Credit and debit cards accepted</li>
                  <li>• Payment plans available</li>
                  <li>• Retainer agreements</li>
                  <li>• Contingency fees (case-dependent)</li>
                  <li>• Pro bono services (qualifying cases)</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                  What's Included
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Attorney consultation and representation</li>
                  <li>• Legal research and case analysis</li>
                  <li>• Document preparation and filing</li>
                  <li>• Court appearances and negotiations</li>
                  <li>• Regular communication and updates</li>
                </ul>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-accent/10 rounded-lg">
              <p className="text-center text-muted-foreground">
                <strong className="text-primary">Note:</strong> The exact cost of legal services 
                varies based on case complexity, duration, and specific needs. We provide detailed 
                cost estimates during your initial consultation and work with you to find a payment 
                arrangement that fits your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
