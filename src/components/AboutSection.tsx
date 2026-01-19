import { Code2, Server, Cloud, Activity } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code" },
  { icon: Server, label: "Microservices" },
  { icon: Cloud, label: "Cloud Native" },
  { icon: Activity, label: "Monitoring" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="section-title inline-block">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
          </div>

          {/* Main Card */}
          <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-neon-blue mx-auto mb-8 flex items-center justify-center neon-glow">
                <span className="text-3xl font-bold text-primary-foreground">AK</span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-10">
                Junior Software Engineer with hands-on experience in{" "}
                <span className="text-primary font-medium">Java</span>,{" "}
                <span className="text-primary font-medium">Spring Boot</span>,{" "}
                <span className="text-primary font-medium">Docker</span>,{" "}
                <span className="text-primary font-medium">Kubernetes</span>, and{" "}
                <span className="text-primary font-medium">Microservices Architecture</span>.
                Passionate about building reliable, scalable, and well-monitored systems
                using modern DevOps practices and real-time observability tools like
                Grafana and Prometheus.
              </p>

              {/* Highlight pills */}
              <div className="flex flex-wrap justify-center gap-4">
                {highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
