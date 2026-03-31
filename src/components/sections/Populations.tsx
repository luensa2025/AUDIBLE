import { Baby, School, User, UserCog, Building } from "lucide-react";

const populations = [
  {
    icon: Baby,
    title: "Recién Nacidos",
    description: "Tamizaje auditivo neonatal desde las primeras 24 horas de vida.",
    accent: "from-coral/20 to-coral/5",
  },
  {
    icon: School,
    title: "Niños y Adolescentes",
    description: "Evaluación pediátrica, terapia del lenguaje y seguimiento del desarrollo auditivo.",
    accent: "from-warm/20 to-warm/5",
  },
  {
    icon: User,
    title: "Adultos",
    description: "Diagnóstico, adaptación de audífonos y audiología ocupacional.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: UserCog,
    title: "Adulto Mayor",
    description: "Rehabilitación auditiva, adaptación de audífonos y acompañamiento integral.",
    accent: "from-teal/20 to-teal/5",
  },
  {
    icon: Building,
    title: "Instituciones",
    description: "Programas de vigilancia epidemiológica y audiometrías ocupacionales para empresas.",
    accent: "from-ocean/20 to-ocean/5",
  },
];

const Populations = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">
            Poblaciones
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">
            Cuidado auditivo para{" "}
            <span className="text-primary italic">todas las edades</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {populations.map((pop) => (
            <div
              key={pop.title}
              className="group bg-card rounded-2xl border p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${pop.accent} flex items-center justify-center mb-4`}>
                <pop.icon className="w-8 h-8 text-foreground/70 group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="font-display text-base text-foreground mb-2">
                {pop.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {pop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Populations;
