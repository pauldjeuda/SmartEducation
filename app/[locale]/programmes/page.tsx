import Image from "next/image";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/page-frame";
import { SectionHeading } from "@/components/section-heading";
import { copy, isLocale, programData } from "@/lib/content";

export default async function ProgramsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw;
  const text = copy[locale];
  const programs = programData[locale];

  return (
    <PageFrame locale={locale}>
      <div className="page-hero container">
        <span className="eyebrow">{text.programs.eyebrow}</span>
        <h1>{text.programs.title}</h1>
        <p>{text.programs.body}</p>
        <span className="page-hero-note">
          {locale === "fr" ? "Élèves · enseignants · familles · communautés" : "Learners · teachers · families · communities"}
        </span>
      </div>

      <section className="program-detail-list container">
        {programs.map((item, index) => (
          <article className={`program-detail program-detail-${index + 1}`} id={item.id} key={item.id}>
            <div className="program-detail-image">
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 48vw" />
            </div>
            <div className="program-detail-copy">
              <span className="tag">0{index + 1} · {item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="program-activity-block">
                <h3>{locale === "fr" ? "Activités prévues" : "Activities in the planned scope"}</h3>
                <ul className="program-activities">
                  {item.activities.map((activity) => <li key={activity}>{activity}</li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="program-approach container">
        <SectionHeading
          eyebrow={locale === "fr" ? "Des actions complémentaires" : "Connected areas of work"}
          title={locale === "fr" ? "L’apprentissage a besoin d’un environnement favorable." : "Learning needs a supportive environment."}
          body={locale === "fr"
            ? "L’accompagnement pédagogique, l’inclusion, la mobilisation des communautés et des lieux d’apprentissage adaptés contribuent ensemble à un accès plus équitable à l’éducation."
            : "Learning support, inclusion, community engagement and suitable learning spaces work together to make access to education more equitable."}
        />
        <div className="program-callout">
          <span className="program-callout-number">3</span>
          <p>{locale === "fr"
            ? "Trois axes complémentaires relient les missions de l’association à des activités éducatives, communautaires et matérielles."
            : "Three connected areas link the association’s missions to educational, community and practical activities."}</p>
        </div>
      </section>

      <section className="program-end container">
        <SectionHeading
          eyebrow={locale === "fr" ? "Agir ensemble" : "Work together"}
          title={locale === "fr" ? "Parlons des besoins de votre communauté." : "Let’s talk about your community’s needs."}
          body={locale === "fr" ? "Pour en savoir plus sur les missions de SmartEducation ou échanger avec l’équipe, contactez-nous." : "To learn more about SmartEducation’s missions or talk with the team, get in touch."}
        />
        <a className="button button-orange" href="mailto:contact@smarteducation.cm?subject=SmartEducation%20%E2%80%94%20nos%20programmes">{text.cta.contact}</a>
      </section>
    </PageFrame>
  );
}
