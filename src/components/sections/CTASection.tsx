import { Phone, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-deep via-ocean to-teal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--warm)/0.1),_transparent_60%)]" />

      <div className="container relative z-10 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-display text-cream">
            ¿Listo para cuidar{" "}
            <span className="text-warm italic">tu audición?</span>
          </h2>
          <p className="text-cream/70 text-lg">
            Agenda tu cita hoy y da el primer paso hacia una mejor salud auditiva.
          </p>

          <a
            href="https://wa.me/573000000000?text=Hola,%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-warm text-deep font-bold px-10 py-5 rounded-full text-lg hover:bg-warm/90 transition-all hover:scale-105 shadow-2xl"
          >
            <Phone className="w-5 h-5" />
            Agendar por WhatsApp
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-cream/50 text-sm">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Cali, Colombia
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> Lun–Vie 7:00am – 5:00pm
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
