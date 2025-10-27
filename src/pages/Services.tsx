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
  Gavel, 
  LandPlotIcon
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Gavel,
      title: "Dispute Resolution & Recovery",
      description: "We take a pragmatic and objective approach to resolving complex disputes. Recognising the time value of money, our goal is to settle issues efficiently, quietly, and in our clients’ best interests. We provide early neutral evaluations and cost–benefit analyses of litigation and negotiation options before deciding on the most effective path. Our advocates are skilled in both litigation and alternative dispute resolution, with proven experience assisting financial institutions in debt recovery and enforcement."
    },
    {
      icon: Scale,
      title: "Tax Planning & Advisory Services",
      description: "Our dedicated tax team helps clients navigate Nigeria’s evolving tax landscape with clarity and confidence. We deliver strategic tax planning and advisory services backed by deep experience before federal and state tax authorities. Our partners bring a blend of public and private sector expertise, complemented by strong relationships with regulators to ease compliance and mitigate tax risks. We have successfully represented clients before the Tax Appeal Tribunal and appellate courts in significant tax disputes.",
    },
    {
      icon: Shield,
      title: "Banking & Corporate Finance",
      description: "We provide comprehensive legal support in banking law, asset-based financing, and security perfection — including ship and aircraft mortgages. Our lawyers advise on securitisation, syndicated loans, and inter-creditor arrangements, leveraging hands-on experience from major financial transactions. We also conduct corporate searches and due diligence to support informed decision-making in complex finance deals.",
      
    },
    {
      icon: Briefcase,
      title: "Transaction Support",
      description: "Drawing on our senior team’s experience in consulting and commercial law, we deliver practical support across the transaction lifecycle. Our expertise covers debt management and recovery, insolvency, corporate restructuring, and financial advisory. We help clients manage risks, optimise outcomes, and achieve smooth deal execution.",
    },
    {
      icon: FileText,
      title: "Labour & Employment Law",
      description: "In Nigeria’s dynamic economy, workplace arrangements continue to evolve with technology and globalisation. We advise employers and employees on employment contracts, workplace policies, and emerging labour issues. Our partners provide strategic guidance that balances compliance, fairness, and commercial practicality.",
    },
    {
      icon: Users,
      title: "Corporate Secretarial Services",
      description: "We offer reliable, stress-free secretarial and governance support to help businesses stay compliant. Our team assists company secretaries and in-house solicitors with filings, governance documentation, and risk management processes. We ensure your corporate records and obligations are always in good standing.",
    },
    {
      icon: LandPlotIcon,
      title: "Planning & Acquisition",
      description: "Government intervention in land use — through planning controls or compulsory acquisition — can have significant implications for property owners. We provide expert guidance on navigating these challenges, protecting client rights, and pursuing appropriate remedies. Whether dealing with public acquisition or private land-use changes, we help you achieve fair and lawful outcomes.",
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
              We provide strategic legal solutions designed to resolve complex challenges efficiently, ethically, and with measurable results. Intro to our practice areas
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
