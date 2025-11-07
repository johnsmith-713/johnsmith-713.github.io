import { Code, Database, Cloud, Cog, LineChart, Lock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions designed specifically for your business needs and workflows",
    },
    {
      icon: Database,
      title: "System Integration",
      description: "Seamlessly connect and integrate your existing systems for improved efficiency",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Modern cloud infrastructure that scales with your business growth",
    },
    {
      icon: Cog,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline your business processes",
    },
    {
      icon: LineChart,
      title: "Digital Transformation",
      description: "Strategic guidance to modernize your technology and operations",
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Robust security measures to protect your data and ensure compliance",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-accent">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology services designed to solve real business challenges 
              and drive long-term success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-elegant border border-border hover:border-accent transition-smooth hover:shadow-glow"
              >
                <div className="bg-gradient-accent w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-glow">
                  <service.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
