"use client";

import { useState } from "react";
import Link from "next/link";
import { CLINIC, SERVICE_CATEGORIES } from "@/lib/data";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const category = SERVICE_CATEGORIES[activeTab];

  return (
    <section className="section-padding bg-luxury-bg">
      <div className="luxury-container">
        <div className="mb-12 flex flex-wrap justify-center gap-2 md:mb-16">
          {SERVICE_CATEGORIES.map((cat, index) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`rounded-pill px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-luxury-dark text-luxury-bg"
                  : "bg-luxury-card text-luxury-text hover:bg-luxury-accent/20"
              }`}
            >
              {cat.tabLabel}
            </button>
          ))}
        </div>

        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-serif text-2xl text-luxury-dark md:text-3xl">
            {category.title}
          </h2>
          <p className="mt-3 text-luxury-text/90">{category.subtitle}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {category.services.map((service) => (
            <article
              key={service.id}
              className="card-serenity flex flex-col bg-luxury-bg p-7 md:p-8"
            >
              <h3 className="font-serif text-xl text-luxury-dark">
                {service.name}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-luxury-text">
                {service.description}
              </p>
              {service.subItems && (
                <ul className="mt-4 space-y-2 text-sm text-luxury-text/90">
                  {service.subItems.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-luxury-accent">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {service.requiresValidation ? (
                <Link
                  href={`/reservar?categoria=${category.id}&servicio=${service.id}`}
                  className="btn-pill-outline mt-8 w-full text-center"
                >
                  Solicitar valoración
                </Link>
              ) : (
                <Link
                  href={`/reservar?categoria=${category.id}&servicio=${service.id}`}
                  className="btn-pill-dark mt-8 w-full text-center"
                >
                  Reservar y pagar en línea
                </Link>
              )}
            </article>
          ))}
        </div>

        <p className="mt-16 text-center text-sm leading-relaxed text-luxury-text/70">
          Los tratamientos se reservan y pagan en línea. El catálogo de skincare en
          Tienda es solo informativo.
          <br />
          {CLINIC.phone} · {CLINIC.address}, {CLINIC.city}
        </p>
      </div>
    </section>
  );
}
