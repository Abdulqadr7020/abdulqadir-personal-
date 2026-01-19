import { Briefcase, CheckCircle } from "lucide-react";

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Passport Technology (USA)",
    period: "Present",
    highlights: [
      "Built microservices using Java & Spring Boot",
      "Implemented Docker & Kubernetes deployments",
      "Worked on CI/CD pipelines for automated deployments",
      "Integrated RabbitMQ messaging system",
      "Monitored production using Grafana & Prometheus",
      "Worked with HSM security systems",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="section-title inline-block">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-20 mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 top-0 hidden md:flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-primary neon-glow-sm flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>
                </div>

                {/* Experience card */}
                <div className="glass rounded-2xl p-8 animated-border hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
