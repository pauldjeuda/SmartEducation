import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpenCheck, HeartHandshake, Lightbulb, School, Sparkles, Target, UsersRound } from "lucide-react";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/page-frame";
import { ProgramCard } from "@/components/program-card";
import { NewsCard } from "@/components/news-card";
import { SectionHeading } from "@/components/section-heading";
import { copy, isLocale, newsData, programData } from "@/lib/content";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const text = copy[locale];
  const programs = programData[locale];
  const stories = newsData[locale];
  return <PageFrame locale={locale}>
    <section className="hero-section container">
      <div className="hero-copy">
        <span className="eyebrow"><span className="eyebrow-dot" />{text.hero.eyebrow}</span>
        <h1>{text.hero.title.split(" ").slice(0, -2).join(" ")} <span className="underline-word">{text.hero.title.split(" ").slice(-2).join(" ")}<svg viewBox="0 0 180 13" aria-hidden="true"><path d="M4 8C48 1 117 2 176 7" /></svg></span></h1>
        <p className="hero-description">{text.hero.body}</p>
        <div className="hero-buttons"><Link className="button button-orange" href={`/${locale}/programmes`}>{text.cta.explore}<ArrowUpRight size={18} /></Link><Link className="button button-text" href={`/${locale}/a-propos`}>{locale === "fr" ? "Qui sommes-nous ?" : "Who we are"}<ArrowUpRight size={17} /></Link></div>
        <div className="hero-mini-cards">
          <article className="hero-mini-card hero-mini-card-blue"><span className="hero-mini-number">03</span><span><strong>{locale === "fr" ? "axes d’action" : "areas of action"}</strong><small>{locale === "fr" ? "Éducation · communauté · école" : "Education · community · schools"}</small></span></article>
          <article className="hero-mini-card hero-mini-card-light"><span className="hero-mini-number">04</span><span><strong>{locale === "fr" ? "valeurs essentielles" : "guiding values"}</strong><small>{locale === "fr" ? "Engagement · innovation · impact · excellence" : "Commitment · innovation · impact · excellence"}</small></span></article>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo-back" />
        <div className="hero-doodle-board" aria-hidden="true"><svg viewBox="0 0 360 180" preserveAspectRatio="none"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"><path d="M18 145c25-20 38-22 57-5l16 16c12 12 28 9 37-4l31-44c14-21 34-25 52-9l39 34c15 13 32 9 42-7l22-34"/><path d="M39 61c18-14 40-14 55 0 16 15 12 39-5 49-18 11-40 4-43-15-2-17 11-27 25-24"/><path d="M252 34l12 15 17-4-8 16 10 14-18-2-11 14-3-18-17-7 17-7z"/><circle cx="195" cy="47" r="12"/><path d="M191 47h8m-4-4v8"/></g></svg></div>
        <svg className="hero-loop" viewBox="0 0 150 105" aria-hidden="true"><path d="M5 54c26-32 48-38 54-21 7 19-12 36-27 27-12-7-7-24 11-28 23-6 33 16 20 31-13 14-35 14-43 29 22-14 60-12 85-41 12-14 18-31 34-42" /></svg>
        <Image className="hero-cutout" src="/images/student-cutout.webp" alt={locale === "fr" ? "Une jeune apprenante portant des lunettes et tenant plusieurs cahiers" : "A young learner wearing glasses and holding a stack of notebooks"} width={500} height={500} priority unoptimized />
        <svg className="hero-bursts" viewBox="0 0 100 100" aria-hidden="true"><path d="M33 5l8 24M10 34l23 9M4 70l23-3M64 4l-2 24M87 25l-18 16" /></svg>
      </div>
    </section>

    <section className="intro-section container">
      <SectionHeading eyebrow={text.intro.eyebrow} title={text.intro.title} body={text.intro.body} side />
      <div className="promise-grid">
        <article className="promise-card promise-card-blue"><div className="promise-icon"><BookOpenCheck size={26} /></div><h3>{locale === "fr" ? "Apprendre sans interruption" : "Learning that keeps going"}</h3><p>{locale === "fr" ? "Le tutorat soutient les élèves lorsque les ressources scolaires manquent." : "Tutoring supports students when school resources are scarce."}</p><span className="promise-mark"><Target size={37} /></span></article>
        <article className="promise-card promise-card-orange"><div className="promise-icon"><UsersRound size={26} /></div><h3>{locale === "fr" ? "Des communautés engagées" : "Communities involved"}</h3><p>{locale === "fr" ? "Parents et communautés prennent part à la vie de leur école." : "Parents and communities take part in their schools."}</p><span className="promise-mark"><HeartHandshake size={37} /></span></article>
        <article className="promise-card promise-card-green"><div className="promise-icon"><School size={26} /></div><h3>{locale === "fr" ? "Des écoles plus accueillantes" : "More welcoming schools"}</h3><p>{locale === "fr" ? "Des infrastructures adaptées contribuent à de meilleures conditions d’apprentissage." : "Suitable infrastructure helps create better learning conditions."}</p><span className="promise-mark"><Lightbulb size={37} /></span></article>
      </div>
    </section>

    <section className="approach-section container"><SectionHeading eyebrow={text.approach.eyebrow} title={text.approach.title} body={text.approach.body} /><div className="approach-grid">{text.approach.steps.map((step,index)=><article className="approach-card" key={step.title}><span className="approach-number">0{index+1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>

    <section className="impact-section container">
      <div className="impact-picture-wrap"><div className="impact-picture"><Image src="/images/classroom.jpg" alt={locale === "fr" ? "Des élèves apprennent ensemble dans une salle de classe" : "Students learning together in a classroom"} fill sizes="(max-width: 780px) 100vw, 45vw" /></div><span className="impact-doodle" aria-hidden="true">✳</span><div className="quote-chip"><span>“</span>{locale === "fr" ? "L’école est une aventure que l’on construit ensemble." : "School is a journey we build together."}</div></div>
      <div className="impact-copy"><SectionHeading eyebrow={locale === "fr" ? "Pourquoi SmartEducation ?" : "Why SmartEducation?"} title={locale === "fr" ? "Parce que chaque parcours compte." : "Because every learning journey matters."} body={locale === "fr" ? "Nous agissons avec les communautés pour réduire les inégalités et renforcer les possibilités d’apprentissage." : "We work with communities to reduce inequalities and strengthen learning opportunities."} />
        <div className="impact-stats"><div className="stat stat-primary"><strong>3</strong><span>{locale === "fr" ? "axes d’action" : "areas of action"}</span></div><div className="stat stat-secondary"><strong>4</strong><span>{locale === "fr" ? "valeurs qui nous guident" : "values that guide us"}</span></div><div className="stat stat-outline"><strong>1</strong><span>{locale === "fr" ? "objectif partagé : une éducation équitable" : "shared goal: equitable education"}</span></div></div>
      </div>
    </section>

    <section className="programs-section section-pad">
      <div className="container"><SectionHeading eyebrow={text.programs.eyebrow} title={text.programs.title} body={text.programs.body} side><Link className="button button-outline" href={`/${locale}/programmes`}>{locale === "fr" ? "Voir nos actions" : "Explore our work"}<ArrowUpRight size={17} /></Link></SectionHeading><div className="program-grid">{programs.map((item, index) => <ProgramCard key={item.id} item={item} locale={locale} index={index} />)}</div></div>
    </section>

    <section className="values-section container"><div className="values-heading"><span className="eyebrow">{text.values.eyebrow}</span><h2>{text.values.title}<span className="values-star">✳</span></h2><p>{text.values.body}</p></div><div className="values-list"><div><span className="value-symbol">01</span><strong>{text.values.commitment}</strong><span>{text.values.commitmentText}</span></div><div><span className="value-symbol">02</span><strong>{text.values.innovation}</strong><span>{text.values.innovationText}</span></div><div><span className="value-symbol">03</span><strong>{text.values.impact}</strong><span>{text.values.impactText}</span></div><div><span className="value-symbol">04</span><strong>{text.values.excellence}</strong><span>{text.values.excellenceText}</span></div></div></section>

    <section className="news-section container"><SectionHeading eyebrow={text.news.eyebrow} title={text.news.title} body={text.news.body} side><Link className="text-link news-all" href={`/${locale}/actualites`}>{text.news.all}<ArrowUpRight size={17} /></Link></SectionHeading><div className="news-grid">{stories.map((item, index) => <NewsCard key={item.slug} item={item} locale={locale} index={index} />)}</div></section>

    <section className="join-section container"><div className="join-shape" aria-hidden="true"><span /><span /><span /></div><div className="join-copy"><span className="eyebrow">{text.join.eyebrow}</span><h2>{text.join.title}</h2><p>{text.join.body}</p><div className="join-actions"><Link className="button button-white" href={`/${locale}/adhesion`}>{text.join.button}<ArrowUpRight size={18} /></Link><a className="button button-orange" href={`mailto:contact@smarteducation.cm?subject=${encodeURIComponent(locale === "fr" ? "Soutenir les actions de SmartEducation" : "Support SmartEducation’s work")}`}>{text.cta.donate}<ArrowUpRight size={17} /></a></div></div><div className="join-illustration"><div className="join-book join-book-one" /><div className="join-book join-book-two" /><div className="join-book join-book-three" /><div className="join-cap">SM<br />ED</div><Sparkles className="join-spark" size={38} /></div></section>
  </PageFrame>;
}
