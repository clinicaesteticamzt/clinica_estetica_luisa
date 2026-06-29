import Link from "next/link";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import ClinicMap from "@/components/ClinicMap";
import PageHeader from "@/components/PageHeader";
import { CLINIC } from "@/lib/data";

const HOURS = [
  { days: "Lunes a Viernes", time: "9:00 AM – 7:00 PM" },
  { days: "Sábado", time: "9:00 AM – 3:00 PM" },
  { days: "Domingo", time: "Cerrado" },
];

export default function LocationMap() {
  return (
    <>
      <PageHeader
        label="Ubicación"
        title="Visítanos en Plaza El Encanto"
        description="Clínica en Mazatlán con fácil acceso y estacionamiento. Te esperamos en un espacio diseñado para tu comodidad y tranquilidad."
      />

      <section className="section-padding bg-luxury-card pt-0">
        <div className="luxury-container">
          <ClinicMap
            heightClass="h-[340px] sm:h-[440px] lg:h-[520px]"
            className="mb-8"
          />

          <div className="mb-12 grid gap-4 sm:grid-cols-3 lg:mb-16">
            <div className="rounded-serenity-lg border border-luxury-accent/15 bg-luxury-bg p-5 text-center shadow-serenity">
              <MapPin
                size={22}
                className="mx-auto text-luxury-accent"
                strokeWidth={1.25}
              />
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-luxury-dark">
                Dirección
              </p>
              <p className="mt-2 text-sm leading-relaxed text-luxury-text/80">
                {CLINIC.address}, {CLINIC.city}
              </p>
            </div>

            <div className="rounded-serenity-lg border border-luxury-accent/15 bg-luxury-bg p-5 text-center shadow-serenity">
              <Clock
                size={22}
                className="mx-auto text-luxury-accent"
                strokeWidth={1.25}
              />
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
              <Phone
                size={22}
                className="mx-auto text-luxury-accent"
                strokeWidth={1.25}
              />
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

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center lg:order-2">
              <div className="card-serenity bg-luxury-card p-8 md:p-10">
                <h2 className="font-serif text-2xl text-luxury-dark">
                  Información de contacto
                </h2>

                <ul className="mt-8 space-y-6">
                  <li className="flex gap-4">
                    <MapPin
                      size={20}
                      className="mt-0.5 shrink-0 text-luxury-accent"
                      strokeWidth={1.25}
                    />
                    <div>
                      <p className="text-sm font-medium text-luxury-dark">
                        Dirección
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-luxury-text/80">
                        {CLINIC.address}
                        <br />
                        {CLINIC.city}, {CLINIC.state} {CLINIC.postalCode}
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <Phone
                      size={20}
                      className="mt-0.5 shrink-0 text-luxury-accent"
                      strokeWidth={1.25}
                    />
                    <div>
                      <p className="text-sm font-medium text-luxury-dark">
                        Teléfono / WhatsApp
                      </p>
                      <a
                        href={`tel:${CLINIC.phoneE164}`}
                        className="mt-1 block text-sm text-luxury-text/80 transition-colors hover:text-luxury-accent"
                      >
                        {CLINIC.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <Mail
                      size={20}
                      className="mt-0.5 shrink-0 text-luxury-accent"
                      strokeWidth={1.25}
                    />
                    <div>
                      <p className="text-sm font-medium text-luxury-dark">
                        Agenda
                      </p>
                      <Link
                        href="/reservar"
                        className="mt-1 block text-sm text-luxury-text/80 transition-colors hover:text-luxury-accent"
                      >
                        Reservar cita en línea
                      </Link>
                    </div>
                  </li>
                </ul>

                <div className="mt-10 border-t border-luxury-accent/15 pt-8">
                  <div className="mb-4 flex items-center gap-2">
                    <Clock
                      size={18}
                      className="text-luxury-accent"
                      strokeWidth={1.25}
                    />
                    <h3 className="font-serif text-lg text-luxury-dark">
                      Horarios de atención
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {HOURS.map((slot) => (
                      <li
                        key={slot.days}
                        className="flex flex-col gap-1 text-sm sm:flex-row sm:justify-between sm:gap-4 text-luxury-text/80"
                      >
                        <span>{slot.days}</span>
                        <span className="font-medium text-luxury-dark">
                          {slot.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={CLINIC.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline mt-8 inline-flex items-center gap-2"
                >
                  Abrir en Google Maps
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="card-serenity h-full bg-luxury-card p-8 md:p-10">
                <h2 className="font-serif text-2xl text-luxury-dark">
                  ¿Cómo llegar?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-luxury-text/80">
                  Nos encontramos en Plaza El Encanto, sobre Av. Carlos Canseco.
                  Local 5A, en la zona de La Marina. Usa el mapa para obtener
                  la ruta desde tu ubicación.
                </p>
                <ul className="mt-8 space-y-4 text-sm text-luxury-text/80">
                  <li className="flex gap-3">
                    <span className="font-medium text-luxury-dark">•</span>
                    <span>Estacionamiento disponible en plaza</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-medium text-luxury-dark">•</span>
                    <span>Zona céntrica de Mazatlán, fácil acceso en auto</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-medium text-luxury-dark">•</span>
                    <span>Referencias: Mediterráneo Club Residencial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
