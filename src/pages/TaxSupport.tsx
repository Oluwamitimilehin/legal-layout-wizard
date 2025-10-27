import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Landmark, Briefcase, User, FileText, Shield, Scale, Globe, FolderSearch, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const TaxSupport = () => {
  const whoWeHelp = [
    {
      icon: Building2,
      title: "Corporates (Local & Multinational)",
      description: "Comprehensive tax planning, compliance, and advisory support for businesses across industries and jurisdictions.",
    },
    {
      icon: Landmark,
      title: "Financial Institutions & Banks",
      description: "Specialized tax guidance for financial services, including regulatory compliance, transactions, and audits.",
    },
    {
      icon: Briefcase,
      title: "SMEs & Startups",
      description: "Growth-friendly tax structuring for startups and SMEs, helping you scale efficiently while staying compliant.",
    },
    {
      icon: User,
      title: "High-Net-Worth Individuals & Trusts",
      description: "Personalized tax planning and asset protection strategies for individuals, families, and trustees.",
    },
  ];

  const coreTaxServices = [
    {
      icon: FileText,
      title: "Tax Planning & Structuring",
      description:
        "Practical, commercial tax planning to optimise position while managing compliance risk. Includes corporate structuring, group relief, and cross-border planning.",
    },
    {
      icon: Shield,
      title: "Compliance, Filings & Health-checks",
      description:
        "Comprehensive compliance support — returns, withholding administration, VAT, payroll taxes and periodic health-checks to identify exposure and remedial steps.",
    },
    {
      icon: FolderSearch,
      title: "Audit Defence & Investigations",
      description:
        "Fast, practical support during FIRS/SIRS audits and investigations: document review, engagement strategy, negotiation with authorities and minimising exposure.",
    },
    {
      icon: Scale,
      title: "Tax Disputes & Tribunal Advocacy",
      description:
        "Strategic management of disputes from evaluation to appeal. Representation before the Tax Appeal Tribunal, Federal High Court, and appellate courts.",
    },
    {
      icon: Landmark,
      title: "Tax Risk & Regulatory Advice",
      description:
        "Advisory on novel policy changes and risk assessments for transactions and ongoing operations—leveraging our relationships with tax authorities.",
    },
    {
      icon: Globe,
      title: "Transfer Pricing & International Tax",
      description:
        "Preparation and defence of transfer pricing documentation, structuring related-party transactions and cross-border tax planning.",
    },
    {
      icon: Briefcase,
      title: "Transactional Tax Support (M&A, Financing)",
      description:
        "Due diligence, tax structuring of M&A and financing, post-deal integration tax planning and seller/buyer tax protections.",
    },
    {
      icon: GraduationCap,
      title: "Training & Capacity Building",
      description:
        "Tailored workshops for in-house teams and tax officers on compliance best practices, tribunal procedure, and recent legislative changes.",
    },
  ];

  const processSteps = [
    "Initial brief & triage: confidential intake and quick risk assessment.",
    "Proposal & engagement: clear scope, fixed milestones & costs where possible.",
    "Strategy & implementation: tax planning, compliance remediation or dispute strategy executed by a senior team.",
    "Resolution & reporting: outcomes documented, remediation recommendations and follow-up support.",
    "Continuous support: retainer or project basis for ongoing advisory needs.",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-primary">
              Tax Support Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Law Gates provides end-to-end tax support: strategic planning, compliance, audit defence, dispute resolution and appellate advocacy. 
              We combine public-sector insight, courtroom experience and strong regulatory relationships to reduce risk, preserve value and achieve practical outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12 text-primary">Who We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whoWeHelp.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Tax Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12 text-primary">
            Core Tax Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {coreTaxServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
  key={index}
  className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>
  <div className="flex flex-col items-center text-center space-y-4">
    <div className="p-4 bg-accent/10 rounded-full">
      <Icon className="h-8 w-8 text-accent" />
    </div>
    <h3 className="font-serif text-xl font-semibold text-primary">
      {service.title}
    </h3>
    <p className="text-muted-foreground text-sm">
      {service.description}
    </p>
  </div>
</Card>

              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12 text-primary">
            Our Process: How We Work With You
          </h2>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-10 w-10 bg-accent/10 text-accent flex items-center justify-center rounded-full font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="px-8">
                Contact us today!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TaxSupport;
