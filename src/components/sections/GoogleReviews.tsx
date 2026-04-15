import { Star, ExternalLink } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Audiocare/@3.3663929,-76.5316819,17z/data=!4m6!3m5!1s0x8e30a10026eb05fb:0xeae2a078c96a7b78!8m2!3d3.3663929!4d-76.5316819!16s%2Fg%2F11mzwtgzm7";

const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJ-wXrJgChMI4ReHtqyXigouo";

const reviews = [
  {
    author: "Carlos M.",
    rating: 5,
    text: "Excelente atención, muy profesionales y dedicados. El diagnóstico fue muy completo y me explicaron todo con paciencia.",
    date: "Hace 2 semanas",
  },
  {
    author: "Laura G.",
    rating: 5,
    text: "Llevé a mi bebé para el tamizaje auditivo neonatal y fue una experiencia muy tranquila. El equipo es muy amable y profesional.",
    date: "Hace 1 mes",
  },
  {
    author: "Andrés P.",
    rating: 5,
    text: "Los audífonos que me adaptaron cambiaron mi calidad de vida. Gracias al Dr. Elmer y su equipo por el seguimiento constante.",
    date: "Hace 1 mes",
  },
];

const GoogleReviews = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">
            Reseñas
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">
            Lo que dicen{" "}
            <span className="text-primary italic">nuestros pacientes</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="font-semibold text-foreground">5.0</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm">en Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-card border border-border rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{review.author}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Ver todas las reseñas en Google Maps
          </a>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-md"
          >
            <Star className="w-4 h-4" />
            Déjanos tu reseña
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
