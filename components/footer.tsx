import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Compass,
  DraftingCompass,
  Mail,
  MapPin,
  NotebookPen,
  PencilLine,
  Phone,
  Ruler,
} from "lucide-react";
import { copy, type Locale } from "@/lib/content";

const schoolIcons = [BookOpen, NotebookPen, PencilLine, DraftingCompass, Ruler, Compass];
const schoolPattern = [...schoolIcons, ...schoolIcons, ...schoolIcons];

export function Footer({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <footer className="site-footer">
      <div className="footer-school-pattern" aria-hidden="true">
        {schoolPattern.map((Icon, index) => (
          <Icon key={index} className={`footer-school-pattern-icon footer-school-pattern-icon-${index + 1}`} />
        ))}
      </div>

      <div className="footer-main container">
        <div className="footer-brand-block">
          <Link href={`/${locale}`} className="footer-logo" aria-label="SmartEducation — accueil">
            <Image
              src="/images/smed-logo.webp"
              alt="SmartEducation — Une éducation de qualité pour tous"
              width={382}
              height={148}
              unoptimized
            />
          </Link>
          <p>{text.footer.line}</p>
          <Link className="footer-contact-link" href={`/${locale}/contact`}>
            {text.cta.contact}<ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <nav className="footer-column" aria-label={text.footer.navigation}>
          <h2>{text.footer.navigation}</h2>
          <Link href={`/${locale}/a-propos`}>{text.nav.about}</Link>
          <Link href={`/${locale}/programmes`}>{text.nav.programs}</Link>
          <Link href={`/${locale}/actualites`}>{text.nav.news}</Link>
          <Link href={`/${locale}/adhesion`}>{text.nav.member}</Link>
          <Link href={`/${locale}/statuts`}>{locale === "fr" ? "Les statuts" : "Statutes"}</Link>
        </nav>

        <div className="footer-column footer-contact">
          <h2>{text.footer.contact}</h2>
          <a href="mailto:contact@smarteducation.cm"><Mail size={17} aria-hidden="true" />contact@smarteducation.cm</a>
          <a href="tel:+237691344563"><Phone size={17} aria-hidden="true" />+237 691 34 45 63</a>
          <span><MapPin size={17} aria-hidden="true" />{text.footer.location}</span>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} SmartEducation. {text.footer.rights}</p>
        <Link href={`/${locale}/informations-legales`}>
          {locale === "fr" ? "Informations légales & confidentialité" : "Legal & privacy information"}
        </Link>
        <Link href={`/${locale}/credits-visuels`}>{text.footer.imageCredits}</Link>
      </div>
    </footer>
  );
}
