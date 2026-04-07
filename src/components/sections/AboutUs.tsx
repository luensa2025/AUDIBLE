import { Target, Eye, Heart, ShieldCheck, Sparkles, HandHeart, TrendingUp, MapPin, Home } from "lucide-react";
import elmerDiazImg from "@/assets/elmer-diaz.webp";
import dianaIruritaImg from "@/assets/diana-irurita.jpg";
import dianaJaramilloImg from "@/assets/diana-jaramillo.jpg";
import audiologaImg from "@/assets/audiologa-consulta.webp";

const values = [
  {
    icon: ShieldCheck,
    title: "Responsabilidad",
    description: "Actuamos con profesionalismo y ética en cada consulta, priorizando siempre el bienestar y la salud de nuestros pacientes.",
  },
  {
    icon: HandHeart,
    title: "Empatía",
    description: "Escuchamos activamente a nuestros pacientes, comprendiendo sus necesidades y creando un ambiente de confianza y apoyo.",
  },
  {
    icon: Heart,
    title: "Amor",
    description: "Realizamos nuestro trabajo con vocación y dedicación, cuidando cada detalle para mejorar la calidad de vida de quienes confían en nosotros.",
  },
  {
    icon: TrendingUp,
    title: "Compromiso",
    description: "Nos mantenemos en constante actualización, incorporando tecnologías avanzadas y prácticas innovadoras para garantizar una atención efectiva.",
  },
];

const team = [
  { name: "Elmer Díaz", title: "Fonoaudiólogo — Esp. Audiología", photo: elmerDiazImg },
  { name: "Diana María Irurita", title: "Fonoaudióloga — Esp. Audiología", photo: dianaIruritaImg },
  { name: "Diana Patricia Jaramillo", title: "Fonoaudióloga — Esp. Audiología", photo: dianaJaramilloImg },
];

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">
            Sobre Nosotros
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">
            Conoce a{" "}
            <span className="text-primary italic">AudioCare</span>
          </h2>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-2xl border p-8 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display text-foreground mb-3">Misión</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Brindar soluciones auditivas integrales, a través de una atención especializada,
              personalizada y humanizada, diagnósticos precisos y la provisión de dispositivos
              auditivos de alta calidad para mejorar el bienestar auditivo y comunicativo.
            </p>
          </div>
          <div className="bg-card rounded-2xl border p-8 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-warm/20 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-warm" />
            </div>
            <h3 className="text-xl font-display text-foreground mb-3">Visión</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ser líderes en la transformación del cuidado auditivo mediante el trato humanizado
              y la atención personalizada, junto con la integración de la tecnología y la educación
              que promuevan la salud auditiva y comunicativa en el suroccidente colombiano.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-center text-2xl md:text-3xl font-display text-foreground mb-10">
            Nuestros <span className="text-primary italic">Valores</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((val) => (
              <div
                key={val.title}
                className="flex gap-4 bg-card rounded-2xl border p-6 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <val.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-foreground mb-1">{val.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo Profesional */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-center text-2xl md:text-3xl font-display text-foreground mb-4">
            Nuestros <span className="text-primary italic">Profesionales</span>
          </h3>

          {/* Foto destacada + texto */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div className="rounded-2xl overflow-hidden shadow-lg border">
              <img
                src={audiologaImg}
                alt="Profesional AudioCare en consultorio"
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Somos un grupo de especialistas en audiología con más de 15 años de experiencia.
                Contamos con RETHUS activo y registro de habilitación, estamos colegiados al
                Colegio Colombiano de Fonoaudiología (CCF) y pertenecemos a la Asociación
                Colombiana de Audiología (ASOAUDIO).
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Somos profesores universitarios con trayectoria investigativa y permanente
                actualización. Contamos con certificados en electrofisiología, adaptación de
                audífonos y medicina vestibular a nivel nacional e internacional.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                En AUDIOCARE contamos con equipos de alta y última tecnología para el tamizaje
                auditivo neonatal y para la adaptación de audífonos. Somos aliados de las marcas
                <strong className="text-foreground"> Widex</strong> y
                <strong className="text-foreground"> Oticon</strong>.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-card rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <p className="font-display text-foreground text-lg">{member.name}</p>
                  <p className="text-muted-foreground text-sm">{member.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Widex", "Oticon", "Electrofisiología", "Medicina Vestibular"].map((badge) => (
              <span
                key={badge}
                className="bg-primary/10 text-primary text-xs font-medium px-4 py-2 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Instalaciones y Ubicación */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-2xl md:text-3xl font-display text-foreground mb-4">
            Nuestras <span className="text-primary italic">Instalaciones</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl border p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Instalaciones diseñadas para ofrecer un entorno moderno, cómodo y funcional,
                equipado con tecnología especializada para evaluaciones y tratamientos auditivos
                precisos. Cada espacio garantiza privacidad, seguridad y una experiencia agradable.
              </p>
            </div>
            <div className="bg-card rounded-2xl border overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5!2d-76.545!3d3.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a7c0!2sBeOne%20Medical%20Work!5e0!3m2!1ses!2sco!4v1"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación AudioCare - BeOne Medical Work"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-warm" />
                  <strong className="text-foreground text-sm">BeOne Medical Work, Calle 15A #101-51, Ciudad Jardín</strong>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-teal" />
                  <p className="text-primary text-sm font-semibold">
                    Servicio a domicilio disponible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
