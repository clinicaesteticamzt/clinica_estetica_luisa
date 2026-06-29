import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Logo from "@/components/Logo";
import { CLINIC, GOOGLE_REVIEWS } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=1080&fit=crop"
          alt="Tratamiento facial médico estético en Mazatlán"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-luxury-dark/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/20 via-transparent to-luxury-dark/50" />
      </div>

      {/* Floating badges */}
      <div className="absolute left-4 top-32 z-10 hidden rounded-serenity-lg border border-white/20 bg-white/95 px-4 py-3 shadow-float backdrop-blur-sm md:left-8 md:block lg:left-16">
        <p className="text-xs font-medium text-luxury-text/70">Pacientes satisfechas</p>
        <p className="font-serif text-xl text-luxury-dark">500+</p>
      </div>
      <a
        href={CLINIC.googleReviews}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 top-40 z-10 hidden rounded-serenity-lg border border-white/20 bg-white/95 px-4 py-3 shadow-float backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02] md:right-8 md:block lg:right-16"
        aria-label={`Ver ${GOOGLE_REVIEWS.count} opiniones en Google`}
      >
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} className="fill-luxury-accent text-luxury-accent" />
          ))}
        </div>
        <p className="mt-0.5 font-serif text-xl text-luxury-dark">
          {GOOGLE_REVIEWS.rating.toFixed(1)}
        </p>
        <p className="text-xs text-luxury-text/60">
          Google · {GOOGLE_REVIEWS.count} opiniones
        </p>
      </a>

      <div className="luxury-container relative z-10 flex min-h-[92vh] flex-col items-center justify-center px-4 pb-24 pt-28 text-center sm:pt-32 sm:pb-32">
        <Logo variant="hero" className="mb-6 sm:mb-8 md:mb-10" />

        <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-luxury-bg/80 sm:mb-5 sm:text-xs sm:tracking-[0.2em]">
          Mazatlán, Sinaloa · Plaza El Encanto
        </p>
        <h1 className="max-w-4xl font-serif text-3xl leading-[1.15] text-luxury-bg sm:text-4xl md:text-5xl lg:text-6xl">
          Eleva tu bienestar con medicina estética de lujo
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-luxury-bg/85 sm:text-lg">
          Tecnología médica de punta y resultados naturales con la Dra. Laura
          Simental.
        </p>

        {/* Book bar */}
        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-lg sm:flex-row sm:items-center sm:rounded-pill sm:border sm:border-white/25 sm:bg-white/10 sm:p-1.5 sm:backdrop-blur-md">
          <div className="flex flex-1 items-center rounded-pill border border-white/25 bg-white/95 px-5 py-3.5 sm:border-0 sm:bg-transparent sm:py-0">
            <span className="text-sm text-luxury-text/60 sm:text-luxury-bg/70">
              Valoración · Faciales · Estética
            </span>
          </div>
          <Link
            href="/reservar"
            className="btn-pill-dark shrink-0 gap-2 shadow-float sm:px-8"
          >
            Agendar cita
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
