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

function gearPoints(teeth: number, outerRadius: number, innerRadius: number) {
  const points: string[] = [];
  const stepsPerTooth = 8;

  for (let i = 0; i < teeth * stepsPerTooth; i += 1) {
    const toothPosition = i % stepsPerTooth;
    const radius = toothPosition < 2 || toothPosition > 5 ? innerRadius : outerRadius;
    const angle = (i / (teeth * stepsPerTooth)) * Math.PI * 2 - Math.PI / 2;
    points.push(`${50 + Math.cos(angle) * radius},${50 + Math.sin(angle) * radius}`);
  }

  return points.join(" ");
}

function Gear({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <polygon points={gearPoints(8, 48, 39)} />
      <circle cx="50" cy="50" r="23" />
    </svg>
  );
}

function SchoolDecor({ corner }: { corner: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  return (
    <div className={`footer-school-decor footer-school-decor-${corner}`} aria-hidden="true">
      {schoolIcons.map((Icon, index) => (
        <Icon key={`${corner}-${index}`} className={`footer-school-icon footer-school-icon-${index + 1}`} />
      ))}
    </div>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <footer className="site-footer">
      <div className="footer-gearline" aria-hidden="true">
        <Gear className="footer-gear footer-gear-one" />
        <Gear className="footer-gear footer-gear-two" />
        <Gear className="footer-gear footer-gear-three" />
        <Gear className="footer-gear footer-gear-four" />
        <Gear className="footer-gear footer-gear-five" />
        <Gear className="footer-gear footer-gear-six" />
      </div>

      <SchoolDecor corner="top-left" />
      <SchoolDecor corner="top-right" />
      <SchoolDecor corner="bottom-left" />
      <SchoolDecor corner="bottom-right" />

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
