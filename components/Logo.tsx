import Image from "next/image";
import Link from "next/link";
import { CLINIC } from "@/lib/data";

type LogoProps = {
  variant?: "navbar" | "hero" | "footer" | "mobile";
  showText?: boolean;
  asLink?: boolean;
  className?: string;
};

const VARIANTS = {
  navbar: {
    ring: "h-16 w-16 md:h-[5.25rem] md:w-[5.25rem] p-1.5 shadow-float",
    img: "h-12 w-12 md:h-[4.25rem] md:w-[4.25rem]",
    title: "text-base md:text-xl",
    subtitle: "text-[10px] md:text-xs",
  },
  hero: {
    ring: "h-28 w-28 md:h-36 md:w-36 p-3",
    img: "h-full w-full",
    title: "text-lg md:text-xl",
    subtitle: "text-xs md:text-sm",
  },
  footer: {
    ring: "h-16 w-16 p-2",
    img: "h-12 w-12",
    title: "text-lg",
    subtitle: "text-xs",
  },
  mobile: {
    ring: "h-16 w-16 p-2",
    img: "h-12 w-12",
    title: "text-lg",
    subtitle: "text-xs",
  },
} as const;

export default function Logo({
  variant = "navbar",
  showText = true,
  asLink = true,
  className = "",
}: LogoProps) {
  const v = VARIANTS[variant];
  const isHero = variant === "hero";
  const isFooter = variant === "footer";

  const isPlainLogo = variant === "navbar";

  const logoImage = (
    <Image
      src="/logo.png"
      alt={CLINIC.name}
      width={isPlainLogo ? 96 : variant === "hero" ? 144 : 64}
      height={isPlainLogo ? 96 : variant === "hero" ? 144 : 64}
      className={`object-contain ${isPlainLogo ? "h-10 w-auto sm:h-12 md:h-[5.5rem]" : v.img}`}
      priority={variant === "navbar" || variant === "hero"}
    />
  );

  const content = (
    <>
      {isPlainLogo ? (
        <span className="relative flex shrink-0 items-center">{logoImage}</span>
      ) : (
        <span
          className={`relative flex shrink-0 items-center justify-center rounded-full shadow-serenity ring-1 ${v.ring} ${
            isHero
              ? "bg-luxury-bg/95 ring-luxury-accent/35 shadow-float backdrop-blur-sm"
              : isFooter
                ? "bg-luxury-bg ring-luxury-accent/25"
                : "bg-white ring-luxury-accent/30"
          }`}
        >
          {logoImage}
        </span>
      )}
      {showText && (
        <span className={`text-left leading-tight ${variant === "navbar" ? "hidden sm:block" : ""}`}>
          <span
            className={`block font-serif tracking-wide ${v.title} ${
              isHero ? "text-luxury-bg" : isFooter ? "text-luxury-bg" : "text-luxury-dark"
            }`}
          >
            Dra. Laura Simental
          </span>
          <span
            className={`mt-0.5 block uppercase tracking-[0.2em] ${v.subtitle} ${
              isHero ? "text-luxury-bg/75" : isFooter ? "text-luxury-accent" : "text-luxury-accent"
            }`}
          >
            Medicina Estética
          </span>
        </span>
      )}
    </>
  );

  const wrapperClass = `group flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`;

  if (asLink && !isHero) {
    return (
      <Link href="/" className={wrapperClass}>
        {content}
      </Link>
    );
  }

  if (asLink && isHero) {
    return (
      <Link href="/" className={`${wrapperClass} flex-col gap-4 text-center`}>
        {content}
      </Link>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
}
