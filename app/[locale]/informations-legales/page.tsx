import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/page-frame";
import { isLocale } from "@/lib/content";

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const isFr = raw === "fr";

  return (
    <PageFrame locale={raw}>
      <article className="legal-page container">
        <span className="eyebrow">{isFr ? "Transparence" : "Transparency"}</span>
        <h1>{isFr ? "Informations légales et confidentialité" : "Legal and privacy information"}</h1>
        <section>
          <h2>{isFr ? "Éditeur du site" : "Website publisher"}</h2>
          <p>{isFr ? "Le document statutaire transmis en décembre 2024 désigne l’association comme « Smart Education », en abrégé « SMED », à but non lucratif, apolitique et laïque. Il fixe son siège social à Yaoundé et cite la loi camerounaise n° 90/053 du 19 décembre 1990 relative à la liberté d’association." : "The statutes supplied in December 2024 name the association “Smart Education”, abbreviated “SMED”, and describe it as non-profit, non-political and secular. They set its registered head office in Yaoundé and cite Cameroon’s Law No. 90/053 of 19 December 1990 on freedom of association."}</p>
          <p>{isFr ? "L’adresse de contact publiée est contact@smarteducation.cm ; le téléphone communiqué est le +237 691 34 45 63. L’association indique Yaoundé, Simbock comme adresse de contact." : "The published contact email is contact@smarteducation.cm and the telephone number is +237 691 34 45 63. The association lists Yaoundé, Simbock as its contact location."}</p>
          <p className="legal-note">{isFr ? "Le champ de date de constitution est vide dans le document fourni. Le numéro d’enregistrement, le responsable de publication et l’hébergeur doivent être confirmés par l’association avant publication définitive." : "The establishment-date field is blank in the supplied document. The registration number, publication manager and hosting provider must be confirmed by the association before final publication."}</p>
          <Link className="text-link" href={`/${raw}/statuts`}>{isFr ? "Lire la synthèse des statuts" : "Read the statutes summary"}</Link>
        </section>
        <section>
          <h2>{isFr ? "Données et confidentialité" : "Data and privacy"}</h2>
          <p>{isFr ? "Le site ne propose ni compte utilisateur ni suivi publicitaire. Le formulaire de contact prépare un e-mail dans l’application de messagerie du visiteur : le site ne transmet ni ne conserve le contenu du formulaire. Les liens e-mail et téléphone ouvrent les applications correspondantes." : "The website does not offer user accounts or advertising tracking. The contact form prepares an email in the visitor’s email application; the website does not send or store the form contents. Email and phone links open the corresponding apps."}</p>
          <p>{isFr ? "Les photos de la page sont des images d’illustration issues de Pexels et ne représentent pas nécessairement les bénéficiaires ou les projets de SmartEducation." : "Page photos are illustrative images from Pexels and do not necessarily depict SmartEducation beneficiaries or projects."}</p>
        </section>
        <section>
          <h2>{isFr ? "Demande d’information" : "Information request"}</h2>
          <p>{isFr ? "Pour une question sur ces informations, contactez SmartEducation à l’adresse" : "For questions about this information, contact SmartEducation at"} <a href="mailto:contact@smarteducation.cm">contact@smarteducation.cm</a>.</p>
        </section>
      </article>
    </PageFrame>
  );
}
