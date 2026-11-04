import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Locale } from "@/lib/content";

type Program = { id: string; category: string; title: string; description: string; image: string; alt: string };
export function ProgramCard({ item, locale, index = 0 }: { item: Program; locale: Locale; index?: number }) {
  return <article className={`program-card program-card-${index + 1}`}>
    <div className="program-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
    <div className="program-content"><span className="tag">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><Link className="text-link" href={`/${locale}/programmes#${item.id}`}>{locale === "fr" ? "Découvrir l’action" : "Explore this work"}<ArrowUpRight size={17} /></Link></div>
  </article>;
}
