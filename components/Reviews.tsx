"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { CLINIC, GOOGLE_REVIEWS, type GoogleReview } from "@/lib/data";

const { reviews: TESTIMONIALS, rating, count } = GOOGLE_REVIEWS;

function reviewInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0].charAt(0)}${parts[1].charAt(0)}`.toUpperCase();
  }
  return name.charAt(0).toUpperCase();
}

type ReviewsProps = {
  variant?: "carousel" | "grid";
};

export default function Reviews({ variant = "grid" }: ReviewsProps) {
  const [active, setActive] = useState(0);

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
          <p className="font-serif text-4xl text-luxury-bg">{rating.toFixed(1)}</p>
          <p className="mt-1 text-xs tracking-wide text-luxury-bg/60">
            Google Maps · {count} opiniones · Mazatlán
          </p>
          <h2 className="mt-6 font-serif text-2xl text-luxury-bg sm:text-3xl lg:text-4xl">
            Lo que dicen nuestras pacientes
          </h2>
        </div>

        {variant === "grid" ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-xl">
            <TestimonialCard testimonial={TESTIMONIALS[active]} />
            <div className="mt-8 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Opinión ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-pill transition-all ${
                    i === active ? "w-8 bg-luxury-accent" : "w-1.5 bg-luxury-bg/30"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

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

function TestimonialCard({ testimonial: t }: { testimonial: GoogleReview }) {
  return (
    <article className="flex flex-col rounded-serenity-lg bg-luxury-bg p-7 shadow-serenity md:p-8">
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
          <p className="text-xs text-luxury-text/60">
            {t.timeAgo}
            {t.localGuide ? " · Local Guide" : ""}
          </p>
        </div>
      </div>
    </article>
  );
}
