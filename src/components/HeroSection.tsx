import { ArrowRight, Mail } from "lucide-react";
import { Button } from "./ui/button";
import ParticleBackground from "./ParticleBackground";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  const roles = [
    "Junior Software Engineer",
    "Java Developer",
    "Spring Boot Expert",
    "Microservices Architect",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Hi, I'm{" "}
            <span className="gradient-text neon-text">
              Abdulqadir Kapadiya
            </span>
          </h1>

          {/* Typewriter subtitle */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-6 h-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <TypewriterText texts={roles} className="text-primary font-medium" />
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Building scalable systems, cloud-native applications, and intelligent
            microservices with modern DevOps practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow animate-pulse-glow group"
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
              asChild
            >
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
