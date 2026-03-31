const modalities = [
  "Consulta particular",
  "Convenios empresariales",
  "Pólizas de salud",
  "Medicina prepagada",
  "ARL",
  "Planes complementarios",
];

const Convenios = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">
            Modalidades de Atención
          </p>
          <h2 className="text-2xl md:text-4xl font-display text-foreground">
            Nos adaptamos a ti
          </h2>
          <p className="text-muted-foreground">
            Trabajamos con diversas modalidades para facilitar tu acceso a nuestros servicios.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {modalities.map((mod) => (
            <span
              key={mod}
              className="bg-card border rounded-full px-6 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:shadow-md transition-all cursor-default"
            >
              {mod}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Convenios;
