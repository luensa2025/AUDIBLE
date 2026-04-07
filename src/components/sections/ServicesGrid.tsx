import { Stethoscope, MessageCircle, Building2 } from "lucide-react";
import tamizajeImg from "@/assets/tamizaje-neonatal.webp";
import audifonosImg from "@/assets/audifonos-widex.webp";
import evaluacionImg from "@/assets/evaluacion-auditiva.webp";
import vertigoImg from "@/assets/tratamiento-vertigo.webp";

const servicesWithPhoto = [
  {
    title: "Tamizaje Auditivo Neonatal",
    description: "Evaluamos cómo reacciona el bebé a los sonidos y detectamos posibles dificultades auditivas tempranas. Prueba rápida, segura y no invasiva.",
    image: tamizajeImg,
  },
  {
    title: "Audífonos e Insumos",
    description: "Recupera tu audición y tu calidad de vida con dispositivos modernos, discretos y ajustados por profesionales, acordes a cada necesidad.",
    image: audifonosImg,
  },
  {
    title: "Evaluación Auditiva Integral",
    description: "Valoramos el estado de tu audición para identificar pérdidas auditivas, condiciones metabólicas, visuales o cardiacas que requieren atención temprana.",
    image: evaluacionImg,
  },
  {
    title: "Tratamiento del Vértigo",
    description: "Evaluación y manejo de trastornos del equilibrio. Determinamos la causa del vértigo y aplicamos procedimientos para su tratamiento.",
    image: vertigoImg,
  },
];

const servicesIconOnly = [
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
          <p className="text-muted-foreground text-lg leading-relaxed">
            Estamos comprometidos con la salud auditiva de los vallecaucanos.
            Ofrecemos servicios de detección, evaluación, diagnóstico e intervención
            de posibles alteraciones de la audición en neonatos, niños, adolescentes y adultos.
          </p>
        </div>

        {/* Services with photos - 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {servicesWithPhoto.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services with icons only - 2 columns */}
        <div className="grid sm:grid-cols-2 gap-6">
          {servicesIconOnly.map((service) => (
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
