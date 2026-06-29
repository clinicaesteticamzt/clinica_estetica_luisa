import { Star } from "lucide-react";
import { CLINIC, GOOGLE_REVIEWS, type GoogleReview } from "@/lib/data";

const { reviews: TESTIMONIALS, rating, count } = GOOGLE_REVIEWS;

const MARQUEE_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

function reviewInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0].charAt(0)}${parts[1].charAt(0)}`.toUpperCase();
  }
  return name.charAt(0).toUpperCase();
}

export default function Reviews() {
  return (
    <section className="section-padding bg-luxury-dark">
      <div className="luxury-container">
        <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-16">
          <div className="mb-3 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-luxury-accent text-luxury-accent"
              />
            ))}
          </div>
          <p className="font-serif text-3xl text-luxury-bg sm:text-4xl">
            {rating.toFixed(1)}
          </p>
          <p className="mt-1 text-xs tracking-wide text-luxury-bg/60">
            Google · {count} opiniones · Mazatlán
          </p>
          <h2 className="mt-6 font-serif text-2xl text-luxury-bg sm:text-3xl lg:text-4xl">
            Lo que dicen nuestras pacientes
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-luxury-dark to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-luxury-dark to-transparent sm:w-16" />

          <div className="flex w-max animate-reviews-marquee gap-5 hover:[animation-play-state:paused]">
            {MARQUEE_ITEMS.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
                duplicate={index >= TESTIMONIALS.length}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={CLINIC.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-outline border-luxury-bg/25 text-luxury-bg hover:border-luxury-accent hover:bg-luxury-accent/10 hover:text-luxury-bg"
          >
            Ver todos los comentarios en Google
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial: t,
  duplicate = false,
}: {
  testimonial: GoogleReview;
  duplicate?: boolean;
}) {
  return (
    <article
      aria-hidden={duplicate || undefined}
      className="flex w-[min(85vw,320px)] shrink-0 flex-col rounded-serenity-lg bg-luxury-bg p-6 shadow-serenity sm:w-[340px] sm:p-7"
    >
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-luxury-accent text-luxury-accent"
          />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-luxury-text">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-luxury-accent/15 pt-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-pill bg-luxury-card font-serif text-xs text-luxury-dark">
          {reviewInitials(t.name)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-luxury-dark">{t.name}</p>
          {t.localGuide && (
            <p className="text-xs text-luxury-text/60">Local Guide</p>
          )}
        </div>
      </div>
    </article>
  );
}
