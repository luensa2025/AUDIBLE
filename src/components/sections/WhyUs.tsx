import { ShieldCheck, GraduationCap, HeartHandshake, Microscope } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Habilitados por Secretaría de Salud",
    description: "Cumplimos con todos los estándares de calidad y seguridad exigidos por la normatividad colombiana.",
  },
  {
    icon: GraduationCap,
    title: "Equipo Especializado",
    description: "Audiólogas y fonoaudiólogas con formación de posgrado y experiencia clínica comprobada.",
  },
  {
    icon: HeartHandshake,
    title: "Atención Humanizada",
    description: "Cada paciente es único. Nos tomamos el tiempo para escuchar, explicar y acompañar en cada paso.",
  },
  {
    icon: Microscope,
    title: "Tecnología de Punta",
    description: "Equipos audiológicos de última generación calibrados y certificados para resultados precisos.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-deep to-ocean relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--warm)/0.08),_transparent_60%)]" />

      <div className="container relative z-10 px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-warm font-semibold tracking-widest uppercase text-sm">
            ¿Por Qué Elegirnos?
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-cream">
            Confianza que se{" "}
            <span className="text-warm italic">escucha</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-cream/5 backdrop-blur-md border border-cream/10 rounded-2xl p-8 hover:bg-cream/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-warm/20 flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-warm" />
              </div>
              <h3 className="text-lg font-display text-cream mb-3">
                {reason.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
