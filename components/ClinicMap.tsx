import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { CLINIC } from "@/lib/data";

const MAP_EMBED = `https://www.google.com/maps?q=${CLINIC.geo.latitude},${CLINIC.geo.longitude}&hl=es&z=17&output=embed`;

type ClinicMapProps = {
  className?: string;
  heightClass?: string;
  showOverlay?: boolean;
};

export default function ClinicMap({
  className = "",
  heightClass = "h-[320px] sm:h-[420px] lg:h-[500px]",
  showOverlay = true,
}: ClinicMapProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-serenity-lg border border-luxury-accent/20 bg-luxury-card shadow-serenity-lg ${className}`}
    >
      <iframe
        title={`Ubicación de ${CLINIC.name}`}
        src={MAP_EMBED}
        className={`w-full ${heightClass}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      {showOverlay && (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-luxury-dark/55 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm">
            <div className="rounded-serenity border border-white/20 bg-luxury-bg/95 p-4 shadow-float backdrop-blur-sm sm:p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-luxury-accent/15">
                  <MapPin size={18} className="text-luxury-accent" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <p className="font-serif text-base text-luxury-dark sm:text-lg">
                    {CLINIC.name}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-luxury-text/80 sm:text-sm">
                    {CLINIC.address}
                    <br />
                    {CLINIC.city}, {CLINIC.state}
                  </p>
                </div>
              </div>

              <a
                href={CLINIC.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-dark mt-4 inline-flex w-full items-center justify-center gap-2 text-sm sm:w-auto"
              >
                <Navigation size={16} />
                Cómo llegar
                <ExternalLink size={14} className="opacity-70" />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
