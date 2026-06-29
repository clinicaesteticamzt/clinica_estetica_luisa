"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";

const FAQS = [
  {
    q: "¿Necesito valoración antes de mi primer tratamiento?",
    a: "Sí. En la primera visita evaluamos tu piel o zona a tratar y diseñamos un protocolo personalizado con la Dra. Laura Simental.",
  },
  {
    q: "¿Qué tecnologías utilizan en la clínica?",
    a: "Contamos con Morpheus 8, Lumecca (InMode), Alma Prime X y aparatología médica original certificada bajo protocolos clínicos.",
  },
  {
    q: "¿Cómo puedo agendar mi cita?",
    a: "Puedes reservar en línea en segundos o escribirnos por WhatsApp al 669 273 4135. Confirmamos tu horario de inmediato.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "En Av. Carlos Canseco #6046 Local 5A, Plaza El Encanto, Mazatlán, Sinaloa. Contamos con estacionamiento accesible.",
  },
  {
    q: "¿Los tratamientos son dolorosos?",
    a: "La mayoría son cómodos y no invasivos. En procedimientos médicos aplicamos técnicas para minimizar molestias y maximizar resultados.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-luxury-bg">
      <div className="luxury-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-label">Preguntas frecuentes</p>
            <h2 className="section-title">
              Resolvemos tus dudas esenciales
            </h2>
            <Link href="/ubicacion" className="btn-pill-outline mt-8">
              Ver contacto
            </Link>
          </div>

          <div className="divide-y divide-luxury-accent/15">
            {FAQS.map((faq, i) => (
              <div key={faq.q} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <span className="font-medium text-luxury-dark">{faq.q}</span>
                  <span className="mt-0.5 shrink-0 text-luxury-accent">
                    {open === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {open === i && (
                  <p className="mt-3 pr-8 text-sm leading-relaxed text-luxury-text/80">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
