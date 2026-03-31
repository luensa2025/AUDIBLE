import logo1 from "@/assets/logo.png";
import logo2 from "@/assets/logo-alt1.png";
import logo3 from "@/assets/logo-alt2.png";

interface LogoSelectorProps {
  onSelect: (logo: string) => void;
  selected: string | null;
}

const logos = [
  { src: logo1, label: "Opción 1 — Oreja con ondas" },
  { src: logo2, label: "Opción 2 — Mano y ondas sonoras" },
  { src: logo3, label: "Opción 3 — Emblema con pulso" },
];

const LogoSelector = ({ onSelect, selected }: LogoSelectorProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">
            Elige tu favorito
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">
            Selecciona el <span className="text-primary italic">logo</span>
          </h2>
          <p className="text-muted-foreground">
            Haz clic en el que más te guste para aplicarlo al sitio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {logos.map((logo, i) => (
            <button
              key={i}
              onClick={() => onSelect(logo.src)}
              className={`group bg-card rounded-2xl border-2 p-8 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
                selected === logo.src
                  ? "border-primary shadow-lg ring-2 ring-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <img
                src={logo.src}
                alt={logo.label}
                className="w-40 h-40 object-contain"
              />
              <span className="text-sm font-medium text-foreground">{logo.label}</span>
              {selected === logo.src && (
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  ✓ Seleccionado
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSelector;
