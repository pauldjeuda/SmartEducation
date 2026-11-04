import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { Locale } from "@/lib/content";

type NewsItem = { slug: string; date: string; title: string; excerpt: string };
export function NewsCard({ item, locale, index = 0 }: { item: NewsItem; locale: Locale; index?: number }) {
  return <article className={`news-card news-card-${index + 1}`}><div className="news-card-top"><span>{String(index + 1).padStart(2, "0")}</span><CalendarDays size={18} /></div><time>{item.date}</time><h3>{item.title}</h3><p>{item.excerpt}</p><Link className="text-link" href={`/${locale}/actualites/${item.slug}`}>{locale === "fr" ? "Lire l’article" : "Read story"}<ArrowUpRight size={17} /></Link></article>;
}
