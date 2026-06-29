import { CLINIC } from "@/lib/data";

export default function CofeprisNotice({ className = "" }: { className?: string }) {
  return (
    <div
      className={`space-y-1 text-center text-xs leading-relaxed text-luxury-text/55 ${className}`}
    >
      <p>{CLINIC.cofeprisNotice}</p>
      <p>{CLINIC.professionalLicenseNotice}</p>
    </div>
  );
}
