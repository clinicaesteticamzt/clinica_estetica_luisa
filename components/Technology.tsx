import Image from "next/image";
import { Award, ShieldCheck } from "lucide-react";
import Logo from "@/components/Logo";
import AlmaPrimeXBlock from "@/components/AlmaPrimeXBlock";
import Morpheus8Block from "@/components/Morpheus8Block";
import { CLINIC } from "@/lib/data";

const TECHNOLOGIES = [
  {
    name: "Lumecca (InMode)",
    tagline: "IPL de alta potencia para manchas y vascular",
    description:
      "IPL (Luz Pulsada Intensa) de alta potencia para el tratamiento de lesiones vasculares y pigmentarias (manchas) con resultados en menos sesiones.",
    details: [
      "Tecnología InMode con pulsos de luz optimizados",
      "Tratamiento eficaz de manchas solares y rosácea",
      "Sesiones rápidas con resultados visibles desde la primera aplicación",
      "Protocolos personalizados según fototipo cutáneo",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
];

const CERTIFICATIONS = [
  {
    icon: ShieldCheck,
    text: "Cédula Profesional Médica",
    detail: CLINIC.professionalLicense,
  },
  { icon: Award, text: "Aparatología Original Certificada" },
  {
    icon: ShieldCheck,
    text: "Espacio Clínico Autorizado por COFEPRIS",
    detail: CLINIC.cofeprisNumber,
  },
];

type TechnologyProps = {
  variant?: "section" | "page";
};

export default function Technology({ variant = "section" }: TechnologyProps) {
  const isPage = variant === "page";

  return (
    <section className={isPage ? "bg-luxury-bg" : "bg-luxury-card py-20 md:py-28"}>
      {isPage && (
        <div className="border-b border-luxury-accent/10 bg-luxury-card pt-[7.5rem] md:pt-36">
          <div className="luxury-container pb-12 pt-6 text-center md:pb-16 md:pt-8">
            <div className="mb-8 flex justify-center md:mb-10">
              <Logo variant="navbar" showText />
            </div>
            <p className="section-label">Autoridad médica</p>
            <h1 className="section-title">
              Tecnología certificada de clase mundial
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-luxury-text/90 sm:text-lg sm:leading-loose">
              Invertimos en aparatología médica original y certificada para
              ofrecer tratamientos seguros, efectivos y respaldados por
              evidencia clínica internacional.
            </p>
          </div>
        </div>
      )}

      <div className={`luxury-container section-padding ${isPage ? "" : "pt-0"}`}>
        {!isPage && (
          <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-16">
            <p className="section-label">Tecnología certificada</p>
            <h2 className="section-title">Aparatología médica de gama alta</h2>
          </div>
        )}

        <div className="space-y-16 md:space-y-24">
          <Morpheus8Block />

          {TECHNOLOGIES.map((tech, index) => (
            <article
              key={tech.name}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 0 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-serenity-lg border border-luxury-accent/15 shadow-serenity">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-luxury-accent">
                  {tech.tagline}
                </p>
                <h2 className="mt-3 font-serif text-3xl text-luxury-dark md:text-4xl">
                  {tech.name}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-luxury-text">
                  {tech.description}
                </p>
                {isPage && (
                  <ul className="mt-8 space-y-3">
                    {tech.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-relaxed text-luxury-text/90"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-luxury-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}

          <AlmaPrimeXBlock />
        </div>

        <div
          className={`flex flex-col items-center justify-center gap-6 rounded-serenity-lg border border-luxury-accent/15 bg-luxury-dark px-6 py-10 md:flex-row md:gap-12 ${
            isPage ? "mt-16 md:mt-20" : "mt-12"
          }`}
        >
          {CERTIFICATIONS.map(({ icon: Icon, text, detail }) => (
            <div key={text} className="flex items-center gap-3 text-luxury-bg">
              <Icon size={22} className="shrink-0 text-luxury-accent" />
              <div>
                <span className="block text-sm font-medium tracking-wide">{text}</span>
                {detail && (
                  <span className="mt-0.5 block font-sans text-xs tracking-wider text-luxury-accent">
                    {detail}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
