import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Users, TrendingUp, Heart, ComputerIcon } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Depth of Expertise",
      description: "Our lawyers combine academic excellence with extensive courtroom and regulatory experience, giving clients access to informed, strategic advice across complex legal areas.",
    },
    {
      icon: Users,
      title: "Client-Centred Approach",
      description: "Every case receives personal attention. We focus on understanding your goals, not on billing targets or internal pressures.",
    },
    {
      icon: ComputerIcon,
      title: "Innovation and Insight",
      description: "We anticipate challenges before they arise and craft creative, forward-thinking solutions tailored to your needs.",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record in Tax Law",
      description: "With first-hand experience shaping Nigeria’s tax jurisprudence, we are recognised as one of the country’s leading tax law firms, while also providing complementary legal services.",
    },
    {
      icon: Heart,
      title: "Integrity at Every Step",
      description: "Transparency, honesty, and ethical practice are at the heart of everything we do ensuring clients can trust us completely. At The Law Gates, our commitment is simple: to provide insightful, integrity-driven, and impactful legal guidance that helps you move forward with confidence.",
    },
  ];

  const team = [
    {
      name: "Olanrewaju M. Lassise-Phillips, ACTI",
      position: "Lead Partner",
      bio: "Olanrewaju brings more than two decades of post-call experience to The Law Gates, including twelve years working across legal services functions in financial institutions. Grounded in litigation, he began his career at Chief Afe Babalola’s Chambers and went on to hold senior roles in prominent firms, including Head of Chambers at ASCO LP. He has served as Chairman of the Tax Appeal Tribunal (Lagos Zone) and is widely recognised for his practical contribution to Nigeria’s tax jurisprudence. An experienced author and editor, Olanrewaju is one of the editors behind the African Tax Law Report, the Nigerian Revenue Law Reports, and All Nigerian Tax Cases, publications devoted to reporting tax decisions and analysis. He has consulted on numerous high-profile matters, is a recipient of the Mobil Nigeria Unlimited National Merit Award, and was a University of Lagos Scholar. His work combines courtroom experience, regulatory insight, and a clear focus on delivering results for clients.",
    },
    {
      name: "Emeka Lawrence Ihebie (Sabbatical)",
      position: "Associate-Partner, Corporate & Commercial",
      bio: "Emeka graduated First Class (LLB) from the University of Ibadan (2006) and earned his BL (Second Class, Upper) from the Nigeria Law School (2007). An excellence-driven practitioner, he has worked with top Nigerian firms and brings deep expertise in corporate commercial law and corporate litigation. Emeka advises local and offshore clients on foreign direct investment, regulatory compliance, taxation, banking law, admiralty law, and capital markets. He has represented clients at the High Courts, Court of Appeal and the Investment & Securities Tribunal, and continues to sharpen his expertise through focused training and research.",
    },
    {
      name: "John Ndubuisi Isaac",
      position: "Associate-Partner, Corporate & Commercial, Tax & Dispute Resolution",
      bio: "John is a skilled litigator and strategic advocate with strong experience in dispute resolution and real estate matters. He is known for his integrity, courtroom poise, and practical trial strategy. John prepares and argues originating processes and contentious applications at superior courts, develops case strategies, and conducts trials with careful attention to both legal detail and client objectives.",
    },
    {
      name: "Busayo Kogbede-David",
      position: "Secretary & Practice Manager",
      bio: "Busayo combines administrative leadership with sector knowledge to keep the firm running smoothly. Before joining The Law Gates, she served as Secretary to the Society for Tax Attorneys. At the firm she manages practice operations, client intake, and the administrative coordination that ensures timely, professional service across our teams.",
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
              The Law Gates Solicitors
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our strength lies in the quality, integrity, and experience of our lawyers. Intro to the Team.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-8 text-primary">Our History</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                The Law Gates was founded by Olanrewaju M. Lassise-Phillips and Yewande Akomolede, two visionary lawyers who shared a belief that legal practice should combine depth of insight with genuine integrity and measurable impact.
              </p>
              <p>
                From its humble beginnings, The Law Gates has grown into a respected and trusted name within Nigeria’s legal landscape. What started as a small practice driven by passion and principle has become a dynamic, forward-thinking firm recognised for excellence, professionalism, and a client-centred approach.
              </p>
              <p>
                Our founders built The Law Gates on three enduring values — Insight, Integrity, and Impact — values that continue to guide every member of our team today. We take pride in the relationships we build, the clarity we bring to complex matters, and the results we deliver for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Founders’ Vision */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-8 text-primary">Founders’ Vision</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                From the outset, Olanrewaju M. Lassise-Phillips and Yewande Akomolede envisioned a law firm built on substance, not size — one where knowledge meets integrity, and every client feels truly understood.
                Their goal was to create a practice that delivers clear, insightful, and effective legal solutions, guided by professionalism and empathy.
              </p>
              <p>
                Today, that vision continues to define The Law Gates — a firm where every lawyer is empowered to think deeply, act ethically, and make a real impact for the people and businesses we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">
            What Sets Us Apart
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
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">
            Meet Our Team
            
          </h2>
          </div>
          
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
