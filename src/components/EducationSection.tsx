import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="section-title inline-block">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
          </div>

          {/* Education Card */}
          <div className="glass rounded-2xl p-8 animated-border hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-neon-blue/20 border border-primary/20 neon-glow-sm">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  B.Tech in Computer Engineering
                </h3>
                <p className="text-primary font-medium mb-4">
                  SNJB College of Engineering
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Graduated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
