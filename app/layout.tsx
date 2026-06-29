import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Clínica Dra. Laura Simental | Medicina Estética en Mazatlán",
    template: "%s | Clínica Dra. Laura Simental",
  },
  description:
    "Clínica Médica Estética Dra. Laura Simental en Mazatlán, Sinaloa. Morpheus 8, Lumecca, Alma Prime X, Botox, ácido hialurónico y faciales médicos de lujo.",
  keywords: [
    "medicina estética Mazatlán",
    "Morpheus 8 Mazatlán",
    "Botox Mazatlán",
    "clínica estética Sinaloa",
    "Dra Laura Simental",
  ],
  openGraph: {
    title: "Clínica Dra. Laura Simental | Medicina Estética en Mazatlán",
    description:
      "Tecnología médica de punta y resultados naturales. Tratamientos avanzados en Plaza El Encanto, Mazatlán.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
