"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { copy, type Locale } from "@/lib/content";

export function Header({ locale }: { locale: Locale }) {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const pathname = usePathname();
  const text = copy[locale];
  const alternate = locale === "fr" ? "en" : "fr";
  const currentPath = pathname || `/${locale}`;
  const alternatePath = currentPath.replace(/^\/(fr|en)(?=\/|$)/, `/${alternate}`);
  const isMenuOpen = openPath === currentPath;
  const isMembershipPage = currentPath === `/${locale}/adhesion` || currentPath.startsWith(`/${locale}/adhesion/`);
  const links = [
    { href: `/${locale}`, label: text.nav.home },
    { href: `/${locale}/a-propos`, label: text.nav.about },
    { href: `/${locale}/programmes`, label: text.nav.programs },
    { href: `/${locale}/actualites`, label: text.nav.news },
    { href: `/${locale}/contact`, label: text.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href={`/${locale}`} aria-label="SmartEducation — accueil" className="brand">
          <Image src="/images/smed-logo.png" alt="SmartEducation — Une éducation de qualité pour tous" width={382} height={148} priority />
        </Link>
        <nav className={`main-nav${isMenuOpen ? " is-open" : ""}`} aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
          {links.map((link) => {
            const isHome = link.href === `/${locale}`;
            const isActive = isHome
              ? currentPath === link.href
              : currentPath === link.href || currentPath.startsWith(`${link.href}/`);
            return <Link key={link.href} href={link.href} onClick={() => setOpenPath(null)} className={`nav-link${isActive ? " is-active" : ""}`} aria-current={isActive ? "page" : undefined}>{link.label}</Link>;
          })}
          <div className="nav-mobile-actions">
            <Link className="nav-join" href={`/${locale}/adhesion`} onClick={() => setOpenPath(null)}>{text.nav.member}<ArrowUpRight size={16} /></Link>
            <Link href={alternatePath} className="language-switch" lang={alternate} aria-label={locale === "fr" ? "Switch to English" : "Passer en français"} onClick={() => setOpenPath(null)}>{alternate.toUpperCase()}</Link>
          </div>
        </nav>
        <div className="header-actions">
          <Link href={`/${locale}/adhesion`} className={`button button-orange header-cta${isMembershipPage ? " is-active" : ""}`} aria-current={isMembershipPage ? "page" : undefined}>{text.nav.member}<ArrowUpRight size={16} /></Link>
          <Link href={alternatePath} className="language-switch desktop-language" lang={alternate} aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}>{alternate.toUpperCase()}</Link>
          <button className="menu-toggle" aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={isMenuOpen} onClick={() => setOpenPath(isMenuOpen ? null : currentPath)}>{isMenuOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
  );
}
