import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&h=800&fit=crop"
          alt="Ambiente de clínica estética"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-luxury-dark/50" />
      </div>

      <div className="luxury-container relative z-10 flex justify-center">
        <div className="w-full max-w-lg rounded-serenity-lg border border-luxury-accent/10 bg-luxury-bg px-8 py-12 text-center shadow-float md:px-12 md:py-14">
          <h2 className="font-serif text-2xl text-luxury-dark sm:text-3xl">
            ¿Lista para comenzar tu tratamiento?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-luxury-text/80">
            Agenda tu valoración hoy y descubre el protocolo ideal para ti en
            Mazatlán.
          </p>
          <Link href="/reservar" className="btn-pill-dark mt-8 w-full sm:w-auto">
            Agendar cita
          </Link>
        </div>
      </div>
    </section>
  );
}
