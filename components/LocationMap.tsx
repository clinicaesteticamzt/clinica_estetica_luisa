import Link from "next/link";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { CLINIC } from "@/lib/data";

const HOURS = [
  { days: "Lunes a Viernes", time: "9:00 AM – 7:00 PM" },
  { days: "Sábado", time: "9:00 AM – 3:00 PM" },
  { days: "Domingo", time: "Cerrado" },
];

const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${CLINIC.address}, ${CLINIC.city}, ${CLINIC.state}`
)}&z=16&output=embed`;

export default function LocationMap() {
  return (
    <>
      <PageHeader
        label="Contacto"
        title="Encuéntranos en Plaza El Encanto"
        description="Estamos ubicados en el corazón de Mazatlán, con fácil acceso y un espacio clínico diseñado para tu comodidad y tranquilidad."
      />

      <section className="section-padding bg-luxury-bg">
        <div className="luxury-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-serenity-lg border border-luxury-accent/15 shadow-serenity">
              <iframe
                title={`Ubicación de ${CLINIC.name}`}
                src={MAP_EMBED}
                className="h-[420px] w-full sm:h-[480px] lg:h-[560px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col justify-center">
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
                        className="flex justify-between gap-4 text-sm text-luxury-text/80"
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
          </div>
        </div>
      </section>
    </>
  );
}
