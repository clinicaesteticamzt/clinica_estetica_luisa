import UltherapyBadge from "@/components/UltherapyBadge";

export default function TrustBar() {
  return (
    <section className="border-y border-luxury-accent/10 bg-luxury-card py-8 md:py-10">
      <div className="luxury-container space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:justify-between md:gap-x-6">
          {["InMode", "Alma Lasers", "SkinCeuticals", "ZO Skin Health", "Isdin"].map(
            (brand) => (
              <span
                key={brand}
                className="font-serif text-sm uppercase tracking-[0.15em] text-luxury-text/40 md:text-base"
              >
                {brand}
              </span>
            )
          )}
        </div>

        <UltherapyBadge variant="bar" />
      </div>
    </section>
  );
}
