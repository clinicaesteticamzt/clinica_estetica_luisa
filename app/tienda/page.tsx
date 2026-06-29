"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ShoppingBag, X } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BrandSlider from "@/components/BrandSlider";
import SubpageLayout from "@/components/SubpageLayout";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, whatsappUrl, type Product } from "@/lib/data";

const CATEGORIES = [
  "Todos",
  "Limpiadores",
  "Sueros",
  "Protectores Solares",
  "Anti-edad",
] as const;

type Category = (typeof CATEGORIES)[number];

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const whatsappMessage = `Hola, me interesa comprar: ${product.brand} - ${product.name} ($${product.price.toLocaleString("es-MX")} MXN) en Clínica Dra. Laura Simental.`;

  return (
    <article className="card-serenity flex flex-col overflow-hidden bg-luxury-bg">
      <div className="relative aspect-square overflow-hidden bg-luxury-card">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-luxury-accent">
          {product.brand}
        </p>
        <h3 className="mt-1 font-serif text-lg text-luxury-dark">{product.name}</h3>
        <p className="mt-2 font-medium text-luxury-accent">
          ${product.price.toLocaleString("es-MX")} MXN
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="btn-pill-outline flex-1 py-2.5"
          >
            Añadir al carrito
          </button>
          <a
            href={whatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-2.5 text-white hover:opacity-90"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

function CartSidebar() {
  const { items, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) return null;

  const orderMessage = `Hola, deseo realizar el siguiente pedido en Clínica Dra. Laura Simental:\n\n${items
    .map(
      (i) =>
        `• ${i.brand} - ${i.name} x${i.quantity} ($${(i.price * i.quantity).toLocaleString("es-MX")} MXN)`
    )
    .join("\n")}\n\nTotal: $${total.toLocaleString("es-MX")} MXN`;

  return (
    <aside className="fixed bottom-4 right-4 z-50 w-full max-w-sm rounded-serenity-lg border border-luxury-accent/15 bg-luxury-bg p-6 shadow-float">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-serif text-lg text-luxury-dark">
          <ShoppingBag size={20} />
          Carrito ({items.length})
        </h3>
        <button
          type="button"
          onClick={clearCart}
          className="rounded-pill p-1 text-luxury-text/50 hover:text-luxury-dark"
          aria-label="Vaciar carrito"
        >
          <X size={18} />
        </button>
      </div>
      <ul className="mb-4 max-h-48 space-y-3 overflow-y-auto text-sm">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-2">
            <span className="flex-1 truncate text-luxury-text">{item.name}</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-pill border border-luxury-accent/30 text-xs"
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-pill border border-luxury-accent/30 text-xs"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="mb-3 font-medium text-luxury-dark">
        Total: ${total.toLocaleString("es-MX")} MXN
      </p>
      <a
        href={whatsappUrl(orderMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pill-dark block w-full text-center"
      >
        Comprar por WhatsApp
      </a>
    </aside>
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
        title="Tienda de productos dermatológicos"
        description="Marcas de grado médico seleccionadas por la Dra. Laura Simental para prolongar y potenciar tus tratamientos en casa."
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
                className={`rounded-pill px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
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

          <div className="mt-14 text-center">
            <Link href="/servicios" className="btn-pill-outline">
              Ver tratamientos en clínica
            </Link>
          </div>
        </div>
      </section>

      <CartSidebar />
    </SubpageLayout>
  );
}
