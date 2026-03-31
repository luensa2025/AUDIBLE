import { Baby, CheckCircle } from "lucide-react";

const tags = [
  "Desde las 24h de nacido",
  "Resultado inmediato",
  "Indoloro",
  "Certificado OAE / BERA",
];

const FlagshipService = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-deep via-ocean to-teal relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
        <div className="absolute inset-0 rounded-full border-2 border-warm/20 animate-pulse-ring" />
        <div className="absolute inset-4 rounded-full border-2 border-warm/15 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
        <div className="absolute inset-8 rounded-full border-2 border-warm/10 animate-pulse-ring" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-warm/20 flex items-center justify-center">
                <Baby className="w-24 h-24 md:w-32 md:h-32 text-warm" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-cream">
            <p className="text-warm font-semibold tracking-widest uppercase text-sm">
              ★ Servicio Estrella
            </p>
            <h2 className="text-3xl md:text-5xl font-display leading-tight">
              Tamizaje Auditivo{" "}
              <span className="text-warm italic">Neonatal</span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed">
              Detección temprana de pérdida auditiva en recién nacidos.
              Un procedimiento rápido, seguro e indoloro que puede cambiar
              el curso del desarrollo de tu bebé.
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 bg-cream/10 backdrop-blur-sm border border-cream/20 text-cream text-sm px-4 py-2 rounded-full"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-warm" />
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://wa.me/573000000000?text=Hola,%20quiero%20agendar%20un%20tamizaje%20auditivo%20neonatal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-warm text-deep font-bold px-8 py-4 rounded-full hover:bg-warm/90 transition-all hover:scale-105 shadow-lg mt-2"
            >
              Agendar Tamizaje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipService;
