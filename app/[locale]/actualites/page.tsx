import { notFound } from "next/navigation";
import { NewsCard } from "@/components/news-card";
import { PageFrame } from "@/components/page-frame";
import { copy, isLocale, newsData } from "@/lib/content";

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const text = copy[locale]; const news = newsData[locale];
  return <PageFrame locale={locale}><div className="page-hero container"><span className="eyebrow">{text.news.eyebrow}</span><h1>{text.news.title}</h1><p>{text.news.body}</p><span className="page-hero-note">{locale === "fr" ? "Actions de terrain · témoignages de mobilisation · initiatives éducatives" : "Field activities · community involvement · education initiatives"}</span></div><section className="news-archive container"><div className="news-archive-intro"><strong>{locale === "fr" ? "Une mémoire des actions" : "A record of activity"}</strong><p>{locale === "fr" ? "Cette sélection reprend les trois actualités publiées sur le site d’origine. Les dates sont conservées pour distinguer ces archives de nouvelles informations." : "This selection preserves the three news items published on the original website. Their dates remain visible to distinguish these archive items from new updates."}</p></div><div className="news-grid">{news.map((item,index)=><NewsCard key={item.slug} item={item} locale={locale} index={index} />)}</div><p className="archive-note">{locale === "fr" ? "Les dates et résumés proviennent des actualités affichées sur le site SmartEducation." : "Dates and summaries come from the news displayed on the SmartEducation website."}</p></section></PageFrame>;
}
