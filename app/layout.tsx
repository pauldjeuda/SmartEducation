import type { Metadata, Viewport } from "next";
import { PwaRegister } from "@/components/pwa-register";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "SmartEducation | Une éducation de qualité pour tous", template: "%s | SmartEducation" },
  description: "SmartEducation agit pour un accès équitable à une éducation de qualité au Cameroun.",
  applicationName: "SmartEducation",
  manifest: "/manifest.webmanifest",
  icons: { icon: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }, { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }] },
  appleWebApp: { capable: true, title: "SmartEducation", statusBarStyle: "default" },
};

export const viewport: Viewport = { themeColor: "#0b4da1", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><a className="skip-link" href="#contenu">Aller au contenu</a>{children}<PwaRegister /></body></html>;
}
