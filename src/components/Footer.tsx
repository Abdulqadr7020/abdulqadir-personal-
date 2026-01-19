import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border relative overflow-hidden">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © 2026 Abdulqadir Kapadiya. Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            and
            <Code className="w-4 h-4 text-primary" />
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden opacity-30">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              bottom: `${10 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
