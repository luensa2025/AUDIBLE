import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, Phone, Mail, Clock, CheckCircle, XCircle, AlertCircle, Lock, Eye, EyeOff } from "lucide-react";

const BRIDGE_URL = "http://165.227.72.60:3002";
const BRIDGE_SECRET = "audible-bridge-2026";
const AGENDA_PASSWORD = "AudioCare2026!";

interface Cita {
  id: string;
  name: string;
  phone: string;
  email: string;
  specialist: string;
  service: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const statusConfig: Record<string, { label: string; color: string; icon: typeof CheckCircle }> = {
  pendiente: { label: "Pendiente", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", icon: AlertCircle },
  confirmada: { label: "Confirmada", color: "bg-green-500/20 text-green-400 border-green-500/30", icon: CheckCircle },
  cancelada: { label: "Cancelada", color: "bg-red-500/20 text-red-400 border-red-500/30", icon: XCircle },
  completada: { label: "Completada", color: "bg-blue-500/20 text-blue-400 border-blue-500/30", icon: CheckCircle },
};

const Agenda = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [citas, setCitas] = useState<Cita[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("todas");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === AGENDA_PASSWORD) {
      setAuthenticated(true);
      setError("");
      sessionStorage.setItem("agenda_auth", "true");
    } else {
      setError("Contraseña incorrecta");
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("agenda_auth") === "true") {
      setAuthenticated(true);
    }
  }, []);

  const fetchCitas = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BRIDGE_URL}/api/audible/citas?secret=${BRIDGE_SECRET}`);
      const data = await res.json();
      if (data.ok) {
        setCitas(data.citas);
      }
    } catch {
      console.error("Error cargando citas");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authenticated) fetchCitas();
  }, [authenticated, fetchCitas]);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`${BRIDGE_URL}/api/audible/cita/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret: BRIDGE_SECRET, status: newStatus }),
      });
      const data = await res.json();
      if (data.ok) {
        setCitas((prev) =>
          prev.map((c) => (c.id === id ? { ...c, status: newStatus, updatedAt: new Date().toISOString() } : c))
        );
      }
    } catch {
      console.error("Error actualizando cita");
    }
  };

  const filteredCitas = filter === "todas" ? citas : citas.filter((c) => c.status === filter);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("es-CO", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Login screen
  if (!authenticated) {
    return (
      <main className="min-h-screen bg-deep flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="bg-card rounded-2xl border p-8 w-full max-w-sm space-y-6 shadow-2xl"
        >
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-2xl font-display text-foreground">Agenda AudioCare</h1>
            <p className="text-muted-foreground text-sm">Ingresa la contraseña para acceder</p>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full px-4 py-3 pr-12 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:bg-primary/90 transition-all"
          >
            Ingresar
          </button>

          <Link to="/" className="block text-center text-muted-foreground text-xs hover:underline">
            Volver al inicio
          </Link>
        </form>
      </main>
    );
  }

  // Agenda dashboard
  return (
    <main className="min-h-screen bg-deep">
      <div className="container max-w-5xl px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline text-sm mb-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al sitio
            </Link>
            <h1 className="text-2xl md:text-3xl font-display text-cream">
              Agenda de Citas
            </h1>
            <p className="text-cream/50 text-sm mt-1">
              {citas.length} cita{citas.length !== 1 ? "s" : ""} registrada{citas.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={fetchCitas}
            disabled={loading}
            className="inline-flex items-center gap-2 bg-cream/10 text-cream border border-cream/20 px-4 py-2 rounded-xl hover:bg-cream/20 transition-all text-sm disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Actualizar
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["todas", "pendiente", "confirmada", "completada", "cancelada"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-cream/10 text-cream/60 hover:bg-cream/20 border border-cream/10"
              }`}
            >
              {f === "todas" ? "Todas" : statusConfig[f]?.label || f}
              {f === "todas"
                ? ` (${citas.length})`
                : ` (${citas.filter((c) => c.status === f).length})`}
            </button>
          ))}
        </div>

        {/* Citas list */}
        {filteredCitas.length === 0 ? (
          <div className="text-center py-20 text-cream/40">
            <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No hay citas {filter !== "todas" ? `con estado "${filter}"` : "registradas"}</p>
            <p className="text-sm mt-1">Las citas aparecerán aquí cuando los pacientes las soliciten desde el sitio web</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCitas.map((cita) => {
              const sc = statusConfig[cita.status] || statusConfig.pendiente;
              const StatusIcon = sc.icon;
              return (
                <div
                  key={cita.id}
                  className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 hover:bg-cream/8 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    {/* Patient info */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-display text-cream">{cita.name}</h3>
                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${sc.color}`}>
                          <StatusIcon className="w-3 h-3" />
                          {sc.label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-cream/60">
                        <span className="inline-flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5" />
                          <a href={`tel:${cita.phone}`} className="hover:text-cream">{cita.phone}</a>
                        </span>
                        {cita.email && (
                          <span className="inline-flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5" />
                            <a href={`mailto:${cita.email}`} className="hover:text-cream">{cita.email}</a>
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {formatDate(cita.createdAt)}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                          {cita.specialist}
                        </span>
                        <span className="bg-warm/20 text-warm text-xs px-3 py-1 rounded-full">
                          {cita.service}
                        </span>
                      </div>
                      {cita.message && (
                        <p className="text-cream/40 text-sm italic mt-2">"{cita.message}"</p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 shrink-0">
                      {cita.status === "pendiente" && (
                        <>
                          <button
                            onClick={() => updateStatus(cita.id, "confirmada")}
                            className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1.5 rounded-lg hover:bg-green-500/30 transition-all"
                          >
                            Confirmar
                          </button>
                          <button
                            onClick={() => updateStatus(cita.id, "cancelada")}
                            className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1.5 rounded-lg hover:bg-red-500/30 transition-all"
                          >
                            Cancelar
                          </button>
                        </>
                      )}
                      {cita.status === "confirmada" && (
                        <button
                          onClick={() => updateStatus(cita.id, "completada")}
                          className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded-lg hover:bg-blue-500/30 transition-all"
                        >
                          Completar
                        </button>
                      )}
                      {(cita.status === "cancelada" || cita.status === "completada") && (
                        <button
                          onClick={() => updateStatus(cita.id, "pendiente")}
                          className="text-xs bg-cream/10 text-cream/50 border border-cream/20 px-3 py-1.5 rounded-lg hover:bg-cream/20 transition-all"
                        >
                          Reabrir
                        </button>
                      )}
                      <a
                        href={`https://wa.me/${cita.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 px-3 py-1.5 rounded-lg hover:bg-[#25D366]/30 transition-all"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Agenda;
