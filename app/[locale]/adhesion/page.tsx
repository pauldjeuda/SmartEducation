import { ArrowUpRight, HeartHandshake, Mail, UsersRound } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { PageFrame } from "@/components/page-frame";
import { SectionHeading } from "@/components/section-heading";
import { copy, isLocale } from "@/lib/content";

export default async function MembershipPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const text = copy[locale];
  const isFr = locale === "fr";

  return (
    <PageFrame locale={locale}>
      <div className="page-hero container">
        <span className="eyebrow">{text.nav.member}</span>
        <h1>{isFr ? "Votre engagement peut ouvrir des portes." : "Your commitment can open doors."}</h1>
        <p>{isFr ? "En devenant membre, vous soutenez les actions de SmartEducation sur le terrain et participez à la construction d’une éducation plus juste." : "As a member, you support SmartEducation’s work in the field and take part in building a fairer education system."}</p>
      </div>

      <section className="membership-grid container">
        <div className="member-panel">
          <span className="member-panel-icon"><HeartHandshake size={26} /></span>
          <h2>{isFr ? "Rejoindre le mouvement" : "Join the movement"}</h2>
          <p>{isFr ? "Présentez-vous et dites-nous ce qui vous motive. L’équipe vous répondra pour échanger sur les possibilités d’engagement." : "Tell us a little about yourself and what motivates you. Our team will get back to you to discuss ways to get involved."}</p>
          <div className="member-points">
            <span><UsersRound size={18} />{isFr ? "Soutenir une éducation inclusive" : "Support inclusive education"}</span>
            <span><Mail size={18} />{isFr ? "Échanger directement avec l’équipe" : "Connect with our team"}</span>
          </div>
        </div>
        <div className="member-form-wrap">
          <SectionHeading
            eyebrow={isFr ? "Écrivez-nous" : "Get in touch"}
            title={isFr ? "Parlons de votre engagement." : "Let’s talk about getting involved."}
            body={isFr ? "Les modalités ci-dessous sont tirées des statuts transmis en décembre 2024. Écrivez-nous pour confirmer qu’elles sont toujours à jour et connaître la procédure de demande." : "The details below come from the statutes supplied in December 2024. Contact us to confirm they are current and learn how to submit an application."}
          />
          <ContactForm locale={locale} membership />
          <p className="form-note">{isFr ? "Ce formulaire prépare un courriel à l’équipe ; il ne constitue pas à lui seul la demande écrite et signée prévue par les statuts." : "This form prepares an email to the team; it is not itself the signed written application required by the statutes."}</p>
          <Link className="text-link membership-statutes-link" href={`/${locale}/statuts`}>{isFr ? "Consulter la synthèse des statuts" : "Read the statutes summary"}<ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <section className="membership-terms container">
        <SectionHeading
          eyebrow={isFr ? "Ce que prévoient les statuts" : "What the statutes provide"}
          title={isFr ? "Les formes d’adhésion et leurs conditions" : "Membership types and conditions"}
          body={isFr ? "L’association distingue quatre catégories de membres. Les critères et montants ci-dessous reprennent le document statutaire fourni." : "The association has four membership categories. The criteria and amounts below come from the supplied statutes."}
        />
        <div className="membership-term-grid">
          <article>
            <span>01</span>
            <h3>{isFr ? "Quatre catégories" : "Four categories"}</h3>
            <p>{isFr ? "Fondateur, membres actifs, membres d’honneur et membres bienfaiteurs. Le vote en Assemblée générale est réservé au fondateur et aux membres actifs et d’honneur." : "Founder, active members, honorary members and benefactors. Voting at General Assemblies is reserved for the founder and active and honorary members."}</p>
          </article>
          <article>
            <span>02</span>
            <h3>{isFr ? "Adhésion active" : "Active membership"}</h3>
            <p>{isFr ? "Adresser une demande écrite et signée au Bureau exécutif, accepter les statuts et le règlement intérieur, puis s’engager à participer aux activités et responsabilités de l’association." : "Submit a signed written application to the Executive Board, accept the statutes and internal regulations, and commit to taking part in the association’s activities and responsibilities."}</p>
          </article>
          <article>
            <span>03</span>
            <h3>{isFr ? "Droits et cotisations" : "Fees and dues"}</h3>
            <p>{isFr ? "Le document indique un droit d’adhésion de 2 000 FCFA et une cotisation trimestrielle de 2 000 FCFA. Ces montants proviennent du document transmis en décembre 2024 ; confirmez-les auprès de l’équipe avant paiement." : "The document lists a CFA 2,000 admission fee and CFA 2,000 quarterly dues. These amounts are from the document supplied in December 2024; please confirm them with the team before paying."}</p>
          </article>
          <article>
            <span>04</span>
            <h3>{isFr ? "Fin ou suspension" : "Ending or suspending membership"}</h3>
            <p>{isFr ? "Les statuts prévoient la démission écrite, le décès, l’exclusion pour motif grave et la radiation en cas de cotisation impayée quatre mois après l’échéance. Une suspension temporaire peut aussi être prononcée." : "The statutes provide for written resignation, death, exclusion for serious cause and removal for dues unpaid four months after their due date. Temporary suspension may also be imposed."}</p>
          </article>
        </div>
      </section>

      <section className="membership-steps container">
        <SectionHeading
          eyebrow={isFr ? "Un premier échange" : "Start with a conversation"}
          title={isFr ? "Comment commencer ?" : "How to get started"}
          body={isFr ? "Contactez l’équipe pour confirmer les modalités et préparer une demande conforme aux statuts." : "Contact the team to confirm the terms and prepare an application that follows the statutes."}
        />
        <div className="membership-step-grid">
          <article><span>01</span><h3>{isFr ? "Présentez-vous" : "Introduce yourself"}</h3><p>{isFr ? "Partagez votre intérêt pour l’éducation et ce qui vous amène vers SmartEducation." : "Share your interest in education and what brings you to SmartEducation."}</p></article>
          <article><span>02</span><h3>{isFr ? "Déposez votre demande" : "Submit your application"}</h3><p>{isFr ? "L’admission comme membre actif nécessite une demande écrite et signée adressée au Bureau exécutif." : "Active membership requires a signed written application addressed to the Executive Board."}</p></article>
          <article><span>03</span><h3>{isFr ? "Confirmez les modalités" : "Confirm the terms"}</h3><p>{isFr ? "Vérifiez les cotisations indiquées dans les statuts et les modalités pratiques directement auprès de l’association." : "Confirm the dues listed in the statutes and practical arrangements directly with the association."}</p></article>
        </div>
      </section>

      <section className="small-cta container">
        <p>{isFr ? "Vous préférez nous joindre directement ?" : "Prefer to contact us directly?"}</p>
        <a href="mailto:contact@smarteducation.cm?subject=Demande%20d%E2%80%99information%20sur%20l%E2%80%99adh%C3%A9sion" className="text-link">contact@smarteducation.cm<ArrowUpRight size={17} /></a>
      </section>
    </PageFrame>
  );
}
