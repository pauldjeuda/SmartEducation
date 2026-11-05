import type { Metadata, Viewport } from "next";
import { PwaRegister } from "@/components/pwa-register";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "SmartEducation | Une éducation de qualité pour tous", template: "%s | SmartEducation" },
  description: "SmartEducation agit pour un accès équitable à une éducation de qualité au Cameroun.",
  applicationName: "SmartEducation",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/pwa-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/pwa-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/pwa-apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: { capable: true, title: "SmartEducation", statusBarStyle: "default" },
};

export const viewport: Viewport = { themeColor: "#0b4da1", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><a className="skip-link" href="#contenu">Aller au contenu</a>{children}<PwaRegister /></body></html>;
}
