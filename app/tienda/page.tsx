"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import BrandSlider from "@/components/BrandSlider";
import SubpageLayout from "@/components/SubpageLayout";
import { PRODUCTS, type Product } from "@/lib/data";

const CATEGORIES = [
  "Todos",
  "Limpiadores",
  "Sueros",
  "Hidratación",
  "Protectores Solares",
  "Anti-edad",
] as const;

type Category = (typeof CATEGORIES)[number];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-serenity flex flex-col overflow-hidden bg-luxury-bg">
      <div className="relative aspect-square overflow-hidden bg-luxury-card">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-luxury-accent">
          {product.brand}
        </p>
        <h3 className="mt-1 font-serif text-lg text-luxury-dark">{product.name}</h3>
        <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-luxury-text/60">
          {product.category}
        </p>
      </div>
    </article>
  );
}

export default function TiendaPage() {
  const [filter, setFilter] = useState<Category>("Todos");

  const filtered =
    filter === "Todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);

  return (
    <SubpageLayout showBrandSlider={false}>
      <PageHeader
        label="Skincare premium"
        title="Catálogo de productos dermatológicos"
        description="Marcas dermatológicas de la clínica — Avène, Filorga, Neostrata, Uriage, Isispharma, Noreva, Cumlaude Lab, Toskani y más — seleccionadas por la Dra. Laura Simental. Catálogo informativo: la recomendación y adquisición se realiza durante tu consulta."
      />

      <BrandSlider />

      <section className="section-padding bg-luxury-bg">
        <div className="luxury-container">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-pill px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                  filter === cat
                    ? "bg-luxury-dark text-luxury-bg"
                    : "bg-luxury-card text-luxury-text hover:bg-luxury-accent/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/reservar" className="btn-pill-dark">
              Agendar consulta
            </Link>
            <Link href="/servicios" className="btn-pill-outline">
              Ver tratamientos en clínica
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
