"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { CLINIC, GOOGLE_REVIEWS, type GoogleReview } from "@/lib/data";

const { reviews: TESTIMONIALS, rating, count } = GOOGLE_REVIEWS;

const CAROUSEL_INTERVAL_MS = 5500;

function reviewInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0].charAt(0)}${parts[1].charAt(0)}`.toUpperCase();
  }
  return name.charAt(0).toUpperCase();
}

function getVisibleReviews(start: number, visible: number) {
  return Array.from(
    { length: visible },
    (_, index) => TESTIMONIALS[(start + index) % TESTIMONIALS.length],
  );
}

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisible = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setVisibleCount(6);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [paused]);

  const visibleReviews = getVisibleReviews(active, visibleCount);

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

        <div
          className="mx-auto max-w-6xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            key={`${active}-${visibleCount}`}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleReviews.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2.5">
            {TESTIMONIALS.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Ver opinión de ${review.name}`}
                aria-current={index === active}
                className={`h-2.5 rounded-full transition-all ${
                  index === active
                    ? "w-8 bg-luxury-accent"
                    : "w-2.5 bg-luxury-bg/30 hover:bg-luxury-bg/50"
                }`}
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

function TestimonialCard({ testimonial: t }: { testimonial: GoogleReview }) {
  return (
    <article className="flex h-full flex-col rounded-serenity-lg bg-luxury-bg p-6 shadow-serenity sm:p-7 md:p-8">
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
