import { ExternalLink, Server, Activity, Shield, Globe } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Data Stream",
    description: "Enterprise-grade microservices platform for real-time data processing and security management.",
    features: [
      "Microservices with Java & Docker",
      "Kubernetes orchestration",
      "RabbitMQ messaging",
      "HSM security integration",
      "Production monitoring (US/Canada)",
    ],
    icons: [Server, Shield, Globe],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Passport IQ",
    description: "Intelligent monitoring and deployment system with automated CI/CD pipelines.",
    features: [
      "CI/CD implementation",
      "Microservices migration",
      "Grafana dashboards",
      "Prometheus metrics",
      "Real-time alerting",
    ],
    icons: [Activity, Server],
    gradient: "from-violet-500 to-purple-600",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden animated-border group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Project header gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8">
                {/* Title and icons */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.icons.map((Icon, i) => (
                      <div
                        key={i}
                        className="p-2 rounded-lg bg-secondary/50 border border-border"
                      >
                        <Icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                {/* Features list */}
                <ul className="space-y-2 mb-8">
                  {project.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary group/btn"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
