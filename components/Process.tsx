import Image from "next/image";

const STEPS = [
  {
    title: "Agenda tu valoración",
    description:
      "Elige tu tratamiento y horario en segundos. Confirmación inmediata por WhatsApp.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
  },
  {
    title: "Sesión personalizada",
    description:
      "La Dra. Laura evalúa tu piel y diseña un protocolo médico adaptado a tus objetivos.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
  },
  {
    title: "Resultados naturales",
    description:
      "Disfruta tratamientos con tecnología de punta y seguimiento clínico continuo.",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=300&fit=crop",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-luxury-dark text-luxury-bg">
      <div className="luxury-container">
        <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-luxury-accent">
            Cómo funciona
          </p>
          <h2 className="font-serif text-3xl text-luxury-bg sm:text-4xl lg:text-[2.75rem]">
            Tu camino hacia el bienestar clínico
          </h2>
        </div>

        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <article
              key={step.title}
              className="flex flex-col gap-5 rounded-serenity-lg border border-luxury-bg/10 bg-luxury-bg/5 p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6"
            >
              <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-serenity sm:h-24 sm:w-36">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
              <div className="flex flex-1 items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-luxury-accent/30 font-serif text-sm text-luxury-bg">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-luxury-bg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-luxury-bg/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
