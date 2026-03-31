import { Phone, ArrowDown } from "lucide-react";

interface HeroProps {
  logo: string;
}

const Hero = ({ logo }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep via-ocean to-teal">
      {/* Decorative circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-warm/5 blur-3xl" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-teal-light/10 blur-3xl" />

      <div className="container relative z-10 flex flex-col items-center text-center gap-8 py-20 px-4">
        <img
          src={logo}
          alt="AudioCare S.A.S. Logo"
          className="w-48 md:w-64 drop-shadow-2xl animate-fade-down"
        />

        <div className="space-y-4 max-w-3xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-warm font-semibold tracking-widest uppercase text-sm">
            Audiología Integral &bull; Cali, Colombia
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-cream leading-tight">
            Escuchamos tu salud,{" "}
            <span className="text-warm italic">cuidamos tu audición</span>
          </h1>
          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Centro de audiología especializado con más de una década de experiencia.
            Diagnóstico, rehabilitación y acompañamiento para todas las edades.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 bg-warm text-deep font-bold px-8 py-4 rounded-full hover:bg-warm/90 transition-all hover:scale-105 shadow-lg"
          >
            Conocer Servicios
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#agendar"
            className="inline-flex items-center gap-2 border-2 border-cream/30 text-cream font-semibold px-8 py-4 rounded-full hover:bg-cream/10 transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            Agendar Cita
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(40, 33%, 97%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
