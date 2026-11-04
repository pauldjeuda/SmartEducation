import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/page-frame";
import { isLocale } from "@/lib/content";

const credits = [
  { title: "Élèves en classe", author: "Kwaku Griffin", href: "https://www.pexels.com/photo/photo-of-a-group-of-children-in-a-classroom-14554004/" },
  { title: "Accompagnement pédagogique", author: "Gustavo Fring", href: "https://www.pexels.com/photo/a-teacher-with-his-students-7156115/" },
  { title: "Apprentissage en classe", author: "Joaquín Reyes Ramos", href: "https://www.pexels.com/photo/teacher-engages-students-in-outdoor-classroom-37476310/" },
];

export default async function ImageCreditsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw;
  return <PageFrame locale={locale}><section className="legal-page container"><span className="eyebrow">{locale === "fr" ? "Crédits" : "Credits"}</span><h1>{locale === "fr" ? "Crédits des images" : "Image credits"}</h1><p>{locale === "fr" ? "Les photos ci-dessous sont des illustrations éditoriales issues de Pexels. Elles ne représentent pas nécessairement les bénéficiaires ou les projets de SmartEducation. Le portrait détouré du hero a été fourni pour ce projet ; sa licence reste à confirmer et le fichier comporte un filigrane visible." : "The photos below are editorial illustrations from Pexels. They do not necessarily depict SmartEducation beneficiaries or projects. The hero cutout was supplied for this project; its license remains to be confirmed and the file contains a visible watermark."}</p><div className="credit-list">{credits.map((item,index)=><a className="credit-row" href={item.href} target="_blank" rel="noreferrer" key={item.href}><span>0{index+1}</span><strong>{item.title}</strong><span>{item.author} · Pexels</span><ArrowUpRight size={17} /></a>)}<div className="credit-row"><span>04</span><strong>{locale === "fr" ? "Portrait détouré du hero" : "Hero portrait cutout"}</strong><span>{locale === "fr" ? "Fichier fourni · licence à confirmer" : "Supplied file · license to confirm"}</span></div></div><a className="text-link" href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">{locale === "fr" ? "Consulter la licence Pexels" : "Read the Pexels license"}<ArrowUpRight size={17} /></a></section></PageFrame>;
}
