"use client";

import Image from "next/image";
import Link from "next/link";
import Card3D from "@/components/Card3D";
import ScrollReveal from "@/components/ScrollReveal";

const CLINIC_RECEPTION_IMAGE = "/fotos/clinica estetica.png";

export default function Intro() {
  return (
    <div className="overflow-x-clip">
      <div className="luxury-container pb-6 pt-12 md:pb-10 md:pt-24 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <ScrollReveal className="relative lg:col-span-7 lg:pr-6" offset={100}>
            <div
              aria-hidden
              className="absolute -bottom-6 -right-4 -z-10 hidden h-[90%] w-[80%] rounded-serenity-lg bg-luxury-card transition-transform duration-700 ease-out lg:block xl:-right-8"
            />
            <div
              aria-hidden
              className="absolute -left-4 top-10 -z-10 h-28 w-28 rounded-full border border-luxury-accent/15 bg-luxury-card/50 lg:h-36 lg:w-36"
            />

            <Card3D className="transition-transform duration-700 ease-out lg:translate-x-3 xl:translate-x-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-serenity-lg shadow-float ring-1 ring-luxury-accent/15 transition-shadow duration-700 ease-out hover:shadow-serenity-lg sm:aspect-[5/6] lg:aspect-[4/5]">
                <Image
                  src={CLINIC_RECEPTION_IMAGE}
                  alt="Recepción de Clínica Dra. Laura Simental en Mazatlán"
                  fill
                  className="object-cover object-center transition-transform duration-[1.2s] ease-out"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  quality={90}
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-luxury-dark/20 via-transparent to-luxury-bg/5" />
              </div>
            </Card3D>
          </ScrollReveal>

          <ScrollReveal
            className="lg:col-span-5 lg:py-8 xl:py-14"
            delay={0.2}
            offset={80}
          >
            <p className="section-label">Experiencia premium</p>
            <h2 className="section-title mt-4">
              Medicina estética de autoridad en el corazón de Mazatlán
            </h2>
            <p className="mt-8 text-base leading-relaxed text-luxury-text/85 sm:text-lg sm:leading-loose">
              En un espacio diseñado para transmitir calma y distinción, cada
              visita combina valoración médica rigurosa, tecnología certificada
              y acompañamiento cercano. Una experiencia boutique en la costa del
              Pacífico para quienes buscan resultados visibles con naturalidad y
              confianza.
            </p>
            <p className="mt-6 text-base leading-relaxed text-luxury-text/85 sm:text-lg sm:leading-loose">
              Nuestros protocolos se respaldan con un catálogo exclusivo de
              marcas dermatológicas de nivel internacional, seleccionadas por la
              Dra. Laura Simental por su eficacia clínica, seguridad y
              estándares de excelencia global.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/reservar"
                className="btn-pill-dark transition-all duration-500 ease-out"
              >
                Agendar valoración
              </Link>
              <Link
                href="/tienda"
                className="btn-pill-outline transition-all duration-500 ease-out"
              >
                Ver catálogo de skincare
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
