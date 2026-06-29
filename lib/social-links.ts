import { Facebook, Instagram, type LucideIcon } from "lucide-react";
import { CLINIC } from "@/lib/data";

export type SocialLink =
  | { href: string; label: string; type: "lucide"; icon: LucideIcon }
  | { href: string; label: string; type: "tiktok" };

export const SOCIAL_LINKS: SocialLink[] = [
  { href: CLINIC.facebook, label: "Facebook", type: "lucide", icon: Facebook },
  { href: CLINIC.instagram, label: "Instagram", type: "lucide", icon: Instagram },
  { href: CLINIC.tiktok, label: "TikTok", type: "tiktok" },
];
