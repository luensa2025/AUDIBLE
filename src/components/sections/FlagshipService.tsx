import { CheckCircle } from "lucide-react";
import bebeOeaImg from "@/assets/bebe-oea.webp";
import bebePeaaImg from "@/assets/bebe-peaa.webp";
import audifonosImg from "@/assets/audifonos-oticon.webp";

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
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-warm font-semibold tracking-widest uppercase text-sm">
            Servicios Destacados
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-cream leading-tight">
            Detección temprana y{" "}
            <span className="text-warm italic">soluciones auditivas</span>
          </h2>
        </div>

        {/* Tamizaje - OEA */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-2 border-warm/20">
              <img src={bebeOeaImg} alt="Tamizaje auditivo neonatal - Otoemisiones Acústicas" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6 text-cream">
            <div className="flex items-center gap-3">
              <span className="bg-warm/20 text-warm text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Servicio Estrella
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-display leading-tight">
              Tamizaje Auditivo{" "}
              <span className="text-warm italic">Neonatal — OEA</span>
            </h3>
            <p className="text-cream/70 text-base leading-relaxed">
              Para garantizar la salud auditiva en los recién nacidos, AUDIOCARE cuenta con
              un programa de tamizaje enfocado a la detección temprana con pruebas objetivas
              de Otoemisiones Acústicas y Potenciales Evocados Auditivos Automatizados,
              con seguimiento para confirmación diagnóstica e inicio de intervención.
            </p>
            <p className="text-cream/60 text-sm leading-relaxed">
              Las Otoemisiones Acústicas (OEA) son sonidos emitidos por el oído interno.
              Su presencia indica un funcionamiento adecuado. Es rápida, no invasiva e indolora.
              Ofrecemos la posibilidad de realizar la prueba en casa.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Desde las 24h de nacido", "Resultado inmediato", "Indoloro", "Servicio a domicilio"].map((tag) => (
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
              href="https://wa.me/573114083525?text=Hola,%20quiero%20agendar%20un%20tamizaje%20auditivo%20neonatal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-warm text-deep font-bold px-8 py-4 rounded-full hover:bg-warm/90 transition-all hover:scale-105 shadow-lg mt-2"
            >
              Agendar Tamizaje
            </a>
          </div>
        </div>

        {/* PEAA */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 text-cream order-2 md:order-1">
            <h3 className="text-2xl md:text-4xl font-display leading-tight">
              Potenciales Evocados{" "}
              <span className="text-warm italic">Auditivos — PEAA</span>
            </h3>
            <p className="text-cream/70 text-base leading-relaxed">
              Registran de manera automática las respuestas eléctricas del sistema auditivo
              central ante estímulos sonoros. Se caracteriza por su alta sensibilidad
              (aproximadamente 98%) para el tamizaje auditivo neonatal.
            </p>
            <div className="flex flex-wrap gap-3">
              {["98% sensibilidad", "No invasiva", "Servicio a domicilio", "Certificado BERA"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 bg-cream/10 backdrop-blur-sm border border-cream/20 text-cream text-sm px-4 py-2 rounded-full"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-warm" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-2 border-cream/20">
              <img src={bebePeaaImg} alt="Potenciales Evocados Auditivos Automatizados" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Audífonos e Insumos */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-2 border-warm/20">
              <img src={audifonosImg} alt="Audífonos Oticon - Adaptación e insumos" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-6 text-cream">
            <h3 className="text-2xl md:text-4xl font-display leading-tight">
              Adaptación e Insumos{" "}
              <span className="text-warm italic">para Audífonos</span>
            </h3>
            <p className="text-cream/70 text-base leading-relaxed">
              Proceso personalizado que incluye selección del dispositivo más adecuado según
              el tipo y grado de pérdida auditiva, estilo de vida y preferencias individuales.
              Realizamos ajustes técnicos, pruebas de verificación y entrenamiento sobre uso,
              cuidado y mantenimiento.
            </p>
            <p className="text-cream/60 text-sm leading-relaxed">
              Disponemos de insumos: pilas, kit de limpieza, eartips, atrapaceras, deshumidificador,
              y accesorios para conectividad con televisor, celular y computador.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Widex", "Oticon", "Pilas e insumos", "Conectividad"].map((tag) => (
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
              href="https://wa.me/573114083525?text=Hola,%20quiero%20información%20sobre%20audífonos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-warm text-deep font-bold px-8 py-4 rounded-full hover:bg-warm/90 transition-all hover:scale-105 shadow-lg mt-2"
            >
              Consultar Audífonos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipService;
