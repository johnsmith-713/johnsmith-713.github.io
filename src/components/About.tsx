import { Shield, Lightbulb, Users, TrendingUp } from "lucide-react";
import teamCollab from "@/assets/team-collab.jpg";
import digitalTransform from "@/assets/digital-transformation.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability & Security",
      description: "Solutions that are reliable, secure, and tailored to each client's unique needs",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Modern, innovative digital solutions for businesses of all sizes",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting partnerships through quality work, transparency, and trust",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Empowering businesses to succeed in a fast-moving digital world",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-accent">VELION TECHNOLOGIES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A Texas-based technology company dedicated to delivering modern, innovative digital 
              solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={teamCollab} 
                alt="Professional team collaborating on technology solutions"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={digitalTransform} 
                alt="Digital transformation and innovation"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-16 space-y-6">
            <p className="text-lg text-foreground/80">
              We focus on helping companies improve efficiency, automate workflows, and adopt reliable 
              technology that supports long-term growth. Our team brings expertise in designing, developing, 
              and integrating systems that solve real business challenges.
            </p>
            <p className="text-lg text-foreground/80">
              We take pride in providing solutions that are reliable, secure, and tailored to each client's 
              unique needs. Our approach combines technical excellence with clear communication and professional 
              project management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-elegant border border-border hover:shadow-glow transition-smooth"
              >
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
