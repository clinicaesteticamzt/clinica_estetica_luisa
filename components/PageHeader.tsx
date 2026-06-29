import Logo from "@/components/Logo";

type PageHeaderProps = {
  label: string;
  title: string;
  description?: string;
  tone?: "sand" | "cream";
};

export default function PageHeader({
  label,
  title,
  description,
  tone = "sand",
}: PageHeaderProps) {
  return (
    <div
      className={`border-b border-luxury-accent/10 pt-[7.5rem] md:pt-36 ${
        tone === "sand" ? "bg-luxury-card" : "bg-luxury-bg"
      }`}
    >
      <div className="luxury-container pb-12 pt-6 text-center md:pb-16 md:pt-8">
        <div className="mb-8 flex justify-center md:mb-10">
          <Logo variant="navbar" showText />
        </div>
        <p className="section-label">{label}</p>
        <h1 className="section-title">{title}</h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-luxury-text/90 sm:text-lg sm:leading-loose">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
