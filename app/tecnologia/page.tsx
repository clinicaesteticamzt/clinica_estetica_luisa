import type { Metadata } from "next";
import Technology from "@/components/Technology";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "Tecnología Médica Certificada",
  description:
    "Morpheus 8, Lumecca y Alma Prime X. Aparatología médica original certificada en Clínica Dra. Laura Simental, Mazatlán.",
};

export default function TecnologiaPage() {
  return (
    <SubpageLayout>
      <Technology variant="page" />
    </SubpageLayout>
  );
}
