import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Locale } from "@/lib/content";

export function PageFrame({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <><Header locale={locale} /><main id="contenu" lang={locale}>{children}</main><Footer locale={locale} /></>;
}
