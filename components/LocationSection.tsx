import Link from "next/link";
import { Clock, Phone } from "lucide-react";
import ClinicMap from "@/components/ClinicMap";
import { CLINIC } from "@/lib/data";

export default function LocationSection() {
  return (
    <section className="section-padding bg-luxury-card">
      <div className="luxury-container">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-luxury-accent">
            Ubicación
          </p>
          <h2 className="font-serif text-3xl text-luxury-dark sm:text-4xl">
            Visítanos en Plaza El Encanto
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-luxury-text/80 sm:text-base">
            Clínica en Mazatlán con fácil acceso y estacionamiento. Te esperamos
            en un espacio diseñado para tu comodidad.
          </p>
        </div>

        <ClinicMap heightClass="h-[340px] sm:h-[440px] lg:h-[520px]" />

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-serenity-lg border border-luxury-accent/15 bg-luxury-bg p-5 text-center shadow-serenity">
            <MapPinIcon />
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-luxury-dark">
              Dirección
            </p>
            <p className="mt-2 text-sm leading-relaxed text-luxury-text/80">
              {CLINIC.address}, {CLINIC.city}
            </p>
          </div>

          <div className="rounded-serenity-lg border border-luxury-accent/15 bg-luxury-bg p-5 text-center shadow-serenity">
            <Clock size={22} className="mx-auto text-luxury-accent" strokeWidth={1.25} />
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-luxury-dark">
              Horario
            </p>
            <p className="mt-2 text-sm text-luxury-text/80">
              Lun–Vie 9:00 – 19:00
              <br />
              Sáb 9:00 – 15:00
            </p>
          </div>

          <div className="rounded-serenity-lg border border-luxury-accent/15 bg-luxury-bg p-5 text-center shadow-serenity">
            <Phone size={22} className="mx-auto text-luxury-accent" strokeWidth={1.25} />
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-luxury-dark">
              Contacto
            </p>
            <a
              href={`tel:${CLINIC.phoneE164}`}
              className="mt-2 block text-sm text-luxury-text/80 transition-colors hover:text-luxury-accent"
            >
              {CLINIC.phone}
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/ubicacion"
            className="btn-pill-outline inline-flex items-center gap-2"
          >
            Ver horarios y contacto completo
          </Link>
        </div>
      </div>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      className="mx-auto text-luxury-accent"
      aria-hidden
    >
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
