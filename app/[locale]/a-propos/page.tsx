import { ArrowUpRight, HeartHandshake, Lightbulb, School, Target } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/page-frame";
import { SectionHeading } from "@/components/section-heading";
import { copy, isLocale } from "@/lib/content";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const text = copy[locale];
  const values = [
    { icon: HeartHandshake, title: text.values.commitment, body: text.values.commitmentText },
    { icon: Lightbulb, title: text.values.innovation, body: text.values.innovationText },
    { icon: Target, title: text.values.impact, body: text.values.impactText },
    { icon: School, title: text.values.excellence, body: text.values.excellenceText },
  ];
  return <PageFrame locale={locale}><div className="page-hero container"><span className="eyebrow">{text.about.eyebrow}</span><h1>{text.about.title}</h1><p>{text.about.body}</p><Link className="button button-orange" href={`/${locale}/programmes`}>{text.cta.explore}<ArrowUpRight size={18} /></Link></div>
    <section className="about-mission container"><div className="mission-card mission-blue"><span className="mission-index">01 / SMED</span><h2>{text.about.mission}</h2><p>{text.about.missionText}</p></div><div className="mission-card mission-cream"><span className="mission-index">02 / SMED</span><h2>{text.about.vision}</h2><p>{text.about.visionText}</p></div></section>
    <section className="about-context container"><SectionHeading eyebrow={text.about.goalEyebrow} title={text.about.goalTitle} body={text.about.goalBody} /><div className="about-context-note"><span className="context-mark">SMED</span><p>{text.about.goalNote}</p></div><p className="about-values-note">{locale === "fr" ? "Le préambule des statuts cite également trois principes fondateurs : solidarité, coopération et responsabilité." : "The statutes’ preamble also names three founding principles: solidarity, cooperation and responsibility."}</p><p className="archive-note">{locale === "fr" ? "Les missions et activités présentées décrivent le cadre de l’association. Les actualités distinguent les actions effectivement réalisées." : "The missions and activities shown describe the association’s remit. News items identify work that has taken place."}</p></section>
    <section className="values-page section-pad"><div className="container"><SectionHeading eyebrow={text.values.eyebrow} title={text.values.title} body={text.values.body} /><div className="value-card-grid">{values.map((item,index)=><article className="value-card" key={item.title}><span className="value-card-icon"><item.icon size={25} /></span><span className="value-card-index">0{index+1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div></section>
  </PageFrame>;
}
