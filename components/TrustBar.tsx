import UltherapyBadge from "@/components/UltherapyBadge";

const BRANDS = [
  "InMode",
  "Alma Lasers",
  "SkinCeuticals",
  "ZO Skin Health",
  "Isdin",
] as const;

const MARQUEE_ITEMS = [...BRANDS, ...BRANDS];

export default function TrustBar() {
  return (
    <section className="border-y border-luxury-accent/25 bg-luxury-dark">
      <div className="overflow-hidden py-5 md:py-6">
        <div
          className="flex w-max animate-brand-marquee items-center motion-reduce:animate-none"
          aria-label="Marcas y tecnologías con las que trabajamos"
        >
          {MARQUEE_ITEMS.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              aria-hidden={index >= BRANDS.length}
              className="mx-8 flex shrink-0 items-center gap-8 font-serif text-sm uppercase tracking-[0.2em] text-luxury-bg/90 md:mx-10 md:text-base"
            >
              {brand}
              <span className="text-luxury-accent" aria-hidden>
                •
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-luxury-bg/10 bg-luxury-dark py-8 md:py-10">
        <div className="luxury-container">
          <UltherapyBadge variant="bar" />
        </div>
      </div>
    </section>
  );
}
