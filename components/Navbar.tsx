"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import TopBar from "@/components/TopBar";
import Logo from "@/components/Logo";
import SocialIcon from "@/components/SocialIcon";
import { SOCIAL_LINKS } from "@/lib/social-links";

const NAV_LINKS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/tecnologia", label: "Tecnología" },
  { href: "/ubicacion", label: "Ubicación" },
  { href: "/tienda", label: "Tienda" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <TopBar />

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-luxury-accent/15 bg-luxury-bg/98 shadow-serenity backdrop-blur-md"
            : "bg-luxury-bg/95 backdrop-blur-sm"
        }`}
      >
        <nav className="luxury-container flex h-[4.5rem] items-center justify-between gap-2 sm:gap-3 md:h-[5.25rem] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <div className="flex min-w-0 items-center lg:justify-start">
            <Logo variant="navbar" showText className="gap-2 sm:gap-3" />
          </div>

          <ul className="hidden items-center justify-center gap-6 lg:flex xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-luxury-text/90 transition-colors duration-300 hover:text-luxury-dark"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-1 sm:gap-3">
            <Link href="/reservar" className="btn-pill-dark hidden px-5 py-2.5 sm:inline-flex">
              Agendar cita
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              className="rounded-pill p-2.5 text-luxury-dark lg:hidden"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <>
          <button
            type="button"
            aria-label="Cerrar menú"
            className="fixed inset-0 top-[6.75rem] z-30 bg-luxury-dark/20 md:top-[7.5rem] lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-x-0 bottom-0 top-[6.75rem] z-40 overflow-y-auto bg-luxury-bg md:top-[7.5rem] lg:hidden">
            <div className="luxury-container border-b border-luxury-accent/10 py-6">
              <Logo variant="mobile" showText asLink={false} />
            </div>
            <ul className="luxury-container flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block border-b border-luxury-accent/10 py-4 text-base font-medium text-luxury-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="border-b border-luxury-accent/10 py-4">
              <Link
                href="/reservar"
                className="text-base font-medium text-luxury-dark"
                onClick={() => setMobileOpen(false)}
              >
                Reservar
              </Link>
            </li>
            <li className="border-b border-luxury-accent/10 py-4">
              <div className="flex items-center gap-3">
                <span className="text-sm text-luxury-text/70">Síguenos:</span>
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-luxury-dark text-luxury-bg"
                  >
                    <SocialIcon link={link} size={14} />
                  </a>
                ))}
              </div>
            </li>
            <li className="pt-6">
              <Link
                href="/reservar"
                className="btn-pill-dark block w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                Agendar cita
              </Link>
            </li>
          </ul>
          </div>
        </>
      )}
    </header>
  );
}
