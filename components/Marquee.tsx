const ITEMS = [
  "AGENDAR CITA",
  "MEDICINA ESTÉTICA",
  "MORPHEUS 8",
  "FACIALES MÉDICOS",
  "MAZATLÁN",
  "LUMECCA",
  "ALMA PRIME X",
  "BOTOX",
];

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <section className="overflow-hidden border-y border-luxury-bg/10 bg-luxury-dark py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 text-xs font-semibold tracking-[0.25em] text-luxury-bg/60"
          >
            {item} •
          </span>
        ))}
      </div>
    </section>
  );
}
