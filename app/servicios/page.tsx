import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "Nuestros Tratamientos",
  description:
    "Faciales médicos, medicina estética y tratamientos corporales de alta gama en Clínica Dra. Laura Simental, Mazatlán.",
};

export default function ServiciosPage() {
  return (
    <SubpageLayout>
      <PageHeader
        label="Catálogo clínico"
        title="Nuestros Tratamientos"
        description="Protocolos médicos diseñados para realzar tu belleza con resultados naturales. Explora nuestras tres áreas de especialidad y encuentra el tratamiento ideal para ti."
      />
      <Services />
    </SubpageLayout>
  );
}
