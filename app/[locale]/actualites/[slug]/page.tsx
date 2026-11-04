import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays } from "lucide-react";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/page-frame";
import { isLocale, newsData } from "@/lib/content";

export function generateStaticParams() {
  return (["fr", "en"] as const).flatMap(locale => newsData[locale].map(item => ({ locale, slug: item.slug })));
}

export default async function NewsArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const article = newsData[locale].find(item => item.slug === slug); if (!article) notFound();
  return <PageFrame locale={locale}><article className="article-page container"><Link className="text-link article-back" href={`/${locale}/actualites`}><ArrowLeft size={17} />{locale === "fr" ? "Toutes les actualités" : "All news"}</Link><span className="eyebrow">{locale === "fr" ? "Actualité" : "News"}</span><time><CalendarDays size={17} />{article.date}</time><h1>{article.title}</h1><p className="article-lede">{article.excerpt}</p><div className="article-body"><p>{article.body}</p><p className="archive-note">{locale === "fr" ? "Article développé à partir du résumé publié sur le site SmartEducation." : "Story expanded from the summary published on the SmartEducation website."}</p></div><aside className="article-related"><span className="eyebrow">{locale === "fr" ? "Pour aller plus loin" : "Explore further"}</span><h2>{locale === "fr" ? "Découvrir les actions liées à l’éducation" : "Explore our education work"}</h2><p>{locale === "fr" ? "Retrouvez les trois axes d’action présentés par SmartEducation." : "Explore the three areas of work presented by SmartEducation."}</p><Link className="button button-orange" href={`/${locale}/programmes`}>{locale === "fr" ? "Voir les programmes" : "View programmes"}<ArrowUpRight size={17} /></Link></aside></article></PageFrame>;
}
