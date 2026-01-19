import { 
  Code, 
  Server, 
  Container, 
  Cloud, 
  GitBranch, 
  MessageSquare,
  BarChart3,
  Activity,
  Globe,
  Cpu
} from "lucide-react";

const skills = [
  { name: "Java (8-11)", icon: Code, color: "from-orange-400 to-red-500" },
  { name: "Spring Boot", icon: Server, color: "from-green-400 to-emerald-500" },
  { name: "Microservices", icon: Cpu, color: "from-blue-400 to-cyan-500" },
  { name: "Docker", icon: Container, color: "from-blue-500 to-indigo-500" },
  { name: "Kubernetes", icon: Cloud, color: "from-blue-400 to-purple-500" },
  { name: "CI/CD", icon: GitBranch, color: "from-violet-400 to-purple-500" },
  { name: "RabbitMQ", icon: MessageSquare, color: "from-orange-400 to-amber-500" },
  { name: "Grafana", icon: BarChart3, color: "from-yellow-400 to-orange-500" },
  { name: "Prometheus", icon: Activity, color: "from-red-400 to-rose-500" },
  { name: "Full Stack Web", icon: Globe, color: "from-cyan-400 to-blue-500" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="skill-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} opacity-80 group-hover:opacity-100 transition-opacity group-hover:neon-glow-sm`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
