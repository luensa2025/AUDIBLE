import { Stethoscope, Ear, Baby, Activity, MessageCircle, Building2 } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Diagnóstico Audiológico",
    description: "Audiometría tonal, logoaudiometría, impedanciometría y emisiones otoacústicas con equipos de última generación.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Ear,
    title: "Ayudas Auditivas",
    description: "Selección, adaptación y seguimiento de audífonos digitales. Alianzas con las mejores marcas mundiales.",
    color: "bg-warm/20 text-accent-foreground",
  },
  {
    icon: Baby,
    title: "Audiología Pediátrica",
    description: "Evaluación especializada para bebés y niños con técnicas adaptadas a cada edad y etapa del desarrollo.",
    color: "bg-coral/10 text-coral",
  },
  {
    icon: Activity,
    title: "Evaluación Vestibular",
    description: "Estudio completo del sistema del equilibrio: videonistagmografía, pruebas posicionales y rehabilitación vestibular.",
    color: "bg-teal/10 text-teal",
  },
  {
    icon: MessageCircle,
    title: "Fonoaudiología",
    description: "Terapia del lenguaje, habla y comunicación. Intervención temprana y rehabilitación para niños y adultos.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Building2,
    title: "Audiología Ocupacional",
    description: "Programas de vigilancia epidemiológica auditiva, audiometrías ocupacionales y asesoría en salud auditiva laboral.",
    color: "bg-warm/20 text-accent-foreground",
  },
];

const ServicesGrid = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">
            Audiología integral para{" "}
            <span className="text-primary italic">todas las etapas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Más de 6 líneas de servicio diseñadas para cubrir cada necesidad auditiva.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl border p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
