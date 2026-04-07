import { useState } from "react";
import { CalendarDays, Send, User, Mail, Phone, FileText } from "lucide-react";
import dianaIruritaImg from "@/assets/diana-irurita.jpg";
import dianaJaramilloImg from "@/assets/diana-jaramillo.jpg";
import elmerDiazImg from "@/assets/elmer-diaz.webp";

const specialists = [
  { name: "Elmer Díaz", title: "Fonoaudiólogo", photo: elmerDiazImg },
  { name: "Diana María Irurita", title: "Fonoaudióloga", photo: dianaIruritaImg },
  { name: "Diana Patricia Jaramillo", title: "Fonoaudióloga", photo: dianaJaramilloImg },
];

const services = [
  "Diagnóstico Audiológico",
  "Audífonos e Insumos",
  "Audiología Pediátrica",
  "Tratamiento del Vértigo",
  "Fonoaudiología",
  "Audiología Ocupacional",
];

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialist: "",
    service: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const resp = await fetch("/api/bridge/cita", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: "audible-bridge-2026",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          specialist: formData.specialist,
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await resp.json();

      if (resp.ok && data.ok) {
        setSent(true);
        setFormData({ name: "", email: "", phone: "", specialist: "", service: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(data.error || "Error al enviar la solicitud. Intenta de nuevo.");
      }
    } catch {
      setError("No se pudo conectar. Por favor llama al 311 408 3525.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="agendar" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">
            Agenda Tu Cita
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">
            Tu salud auditiva{" "}
            <span className="text-primary italic">comienza aquí</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecciona tu especialista y servicio. Nos pondremos en contacto contigo para confirmar.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Specialists sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-display text-foreground mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Nuestros Especialistas
            </h3>
            {specialists.map((spec) => (
              <button
                key={spec.name}
                type="button"
                onClick={() => setFormData({ ...formData, specialist: spec.name })}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  formData.specialist === spec.name
                    ? "border-primary bg-primary/5 shadow-lg scale-[1.02]"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  {spec.photo ? (
                    <img
                      src={spec.photo}
                      alt={spec.name}
                      className={`w-12 h-12 rounded-full object-cover border-2 ${
                        formData.specialist === spec.name
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                    />
                  ) : (
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                        formData.specialist === spec.name
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {spec.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-foreground">{spec.name}</p>
                    <p className="text-sm text-muted-foreground">{spec.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nombre completo"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Teléfono / WhatsApp"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Correo electrónico"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>

            <div className="relative">
              <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Seleccionar servicio
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Hidden specialist field for validation */}
            <input type="hidden" name="specialist" value={formData.specialist} />
            {!formData.specialist && (
              <p className="text-sm text-coral flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-coral inline-block" />
                Selecciona un especialista de la lista
              </p>
            )}

            <div className="relative">
              <FileText className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Mensaje adicional (opcional)"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!formData.specialist || sending}
              className="w-full inline-flex items-center justify-center gap-3 bg-warm text-deep font-bold px-8 py-4 rounded-full hover:bg-warm/90 transition-all hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed text-lg"
            >
              {sending ? (
                "Enviando..."
              ) : sent ? (
                "¡Solicitud enviada!"
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Solicitar Cita
                </>
              )}
            </button>

            {error && (
              <p className="text-center text-sm text-coral">{error}</p>
            )}
            <p className="text-center text-xs text-muted-foreground">
              Recibirás confirmación por WhatsApp al número que ingreses
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
