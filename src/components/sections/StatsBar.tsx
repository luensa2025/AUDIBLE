import { Users, Award, Clock, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "3", label: "Especialistas", suffix: "" },
  { icon: Award, value: "100%", label: "Certificada", suffix: "" },
  { icon: Clock, value: "10", label: "Min Tamizaje", suffix: "min" },
  { icon: Heart, value: "0–99", label: "Años de edad", suffix: "" },
];

const StatsBar = () => {
  return (
    <section className="relative -mt-1 z-20">
      <div className="container px-4">
        <div className="bg-card rounded-2xl shadow-xl border p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl md:text-3xl font-mono font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
