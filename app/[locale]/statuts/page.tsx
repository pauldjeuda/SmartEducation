import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/page-frame";
import { isLocale } from "@/lib/content";

const content = {
  fr: {
    eyebrow: "Repères statutaires",
    title: "Les règles qui organisent SmartEducation",
    intro: "Cette synthèse reprend les principales dispositions du document statutaire transmis, daté de décembre 2024. Les missions et activités sont présentées comme le cadre prévu par l’association.",
    sourceNote: "Le document fourni laisse en blanc la date de constitution et la date de signature. Ces dates ne sont donc pas indiquées ici. Cette page est une synthèse de lecture ; le document statutaire complet fait foi.",
    sections: [
      {
        title: "Identité, objet et principes",
        paragraphs: ["Les statuts désignent l’association sous le nom « Smart Education », en abrégé « SMED ». Ils la définissent comme une association à but non lucratif, apolitique et laïque, sans distinction de sexe, de race ou de culture, et interdisent en son sein les discussions à caractère tribal.", "Le préambule présente l’éducation comme un droit fondamental et un moteur du développement humain, économique et social. Il met en avant l’égalité des chances, l’innovation éducative, l’accompagnement des publics vulnérables et la coopération avec les acteurs institutionnels, associatifs et éducatifs. Solidarité, coopération et responsabilité y sont nommées comme valeurs fondatrices. Le texte cite la loi camerounaise n° 90/053 du 19 décembre 1990 relative à la liberté d’association."],
        groups: [],
      },
      {
        title: "Siège, durée et devise",
        paragraphs: ["Le siège social est fixé à Yaoundé. Son transfert peut être décidé par le Bureau exécutif après consultation des membres de l’Assemblée générale, ou par une Assemblée générale extraordinaire. Des antennes peuvent être créées dans d’autres localités, partout dans le monde.", "La durée de l’association est illimitée. L’année sociale court du 1er janvier au 31 décembre. Sa devise est : « Une éducation de qualité pour tous »."],
        groups: [],
      },
      {
        title: "Missions, objectifs et activités prévues",
        paragraphs: ["Les missions statutaires consistent à améliorer l’accès à l’éducation, renforcer la qualité de l’enseignement, promouvoir l’éducation pour tous, favoriser l’éducation non formelle, intégrer l’éducation au développement durable et renforcer la sensibilisation et le plaidoyer.", "L’objectif général est de promouvoir un accès équitable à une éducation de qualité comme levier de développement humain, économique et social, d’autonomisation, de réduction des inégalités et de construction de sociétés durables."],
        groups: [
          { heading: "Objectifs spécifiques", items: ["Réduire les barrières financières, géographiques et sociales, notamment pour les filles, les enfants de familles défavorisées et les personnes en situation de handicap ; réhabiliter des écoles, salles de classe et bibliothèques ; fournir des bourses et du matériel scolaire.", "Former les chefs d’établissement et les enseignants, moderniser les infrastructures et intégrer des outils pédagogiques tels que des tablettes, ordinateurs et plateformes numériques.", "Sensibiliser à l’importance de l’éducation et soutenir les groupes marginalisés ou vulnérables afin de réduire les disparités sociales et de genre.", "Proposer aux jeunes et aux adultes des formations techniques et professionnelles, des ateliers ou des cours pratiques qui favorisent l’employabilité et l’autonomie économique.", "Sensibiliser aux enjeux environnementaux, économiques et sociaux, et promouvoir la citoyenneté, la paix, la tolérance et la justice sociale.", "Mobiliser les communautés, les gouvernements, les ONG et les institutions internationales afin de renforcer les politiques éducatives."] },
          { heading: "Moyens d’action prévus", items: ["Éducation et formation : tutorat, mentorat, soutien scolaire, aide aux devoirs, bourses, ateliers d’alphabétisation, compétences numériques et développement personnel, formation professionnelle et insertion socioprofessionnelle.", "Sensibilisation et plaidoyer : campagnes sur l’éducation des filles et la lutte contre l’abandon scolaire, plaidoyer auprès des institutions publiques et organisations internationales, conférences, séminaires et forums.", "Infrastructures : construction et rénovation d’écoles, bibliothèques et centres de formation ; équipement en livres, ordinateurs, matériel pédagogique et tableaux interactifs ; bibliothèques mobiles et espaces communautaires d’apprentissage.", "Inclusion : programmes pour les personnes en situation de handicap et les enfants réfugiés ou déplacés, ainsi que formation des enseignants aux pratiques inclusives et innovantes.", "Partenariats : coopération avec les écoles, universités et centres de recherche pour l’innovation pédagogique ; collaboration avec les entreprises pour financer des projets et faciliter l’accès aux stages et emplois ; échanges éducatifs et culturels nationaux et internationaux."] },
        ],
      },
      {
        title: "Membres et adhésion",
        paragraphs: ["L’association comprend le fondateur, les membres actifs (personnes physiques ou morales qui s’engagent à participer aux objectifs), les membres d’honneur (pour services éminents) et les membres bienfaiteurs (qui apportent un soutien financier ou en nature). Le droit de vote en Assemblée générale est accordé au fondateur et aux membres actifs et d’honneur ; les statuts donnent une voix prépondérante au président en cas d’égalité."],
        groups: [
          { heading: "Admission d’un membre actif", items: ["Adresser et signer une demande écrite au Bureau exécutif, qui peut la refuser sans avoir à en communiquer les motifs.", "Accepter les statuts et le règlement intérieur, et s’engager à participer activement aux responsabilités et activités de l’association.", "S’acquitter du droit d’adhésion de 2 000 FCFA et d’une cotisation trimestrielle de 2 000 FCFA."] },
          { heading: "Perte de la qualité de membre ou suspension", items: ["La qualité de membre prend fin par démission écrite, décès, exclusion pour attitude contraire aux statuts ou à l’éthique ou autre motif grave, ou radiation pour cotisation impayée quatre mois après son échéance.", "Avant une exclusion pour motif grave, le membre est invité par lettre recommandée avec accusé de réception à fournir des explications écrites.", "Le Bureau exécutif peut décider d’une suspension temporaire. Pendant la suspension, le membre ne participe pas à la vie de l’association ; un mandat électif prend également fin selon les statuts."] },
        ],
      },
      {
        title: "Organes et Bureau exécutif",
        paragraphs: ["Les deux organes de l’association sont l’Assemblée générale, composée des membres, et le Bureau exécutif, dont les membres élus assurent la gestion courante."],
        groups: [
          { heading: "Fonctions prévues au Bureau exécutif", items: ["Le président-fondateur représente l’association dans les actes de la vie civile et en justice, convoque et préside le Bureau, veille à sa bonne marche et au respect des textes, ordonne les dépenses et peut créer des commissions ou des postes.", "Le vice-président remplace le président en cas d’absence et l’assiste dans les tâches confiées.", "Le secrétaire général tient les fichiers des membres, rédige et enregistre les documents, prépare les synthèses des rapports et conserve les archives. Le secrétaire général adjoint l’assiste et le remplace en cas d’empêchement.", "Le trésorier recouvre et dépose les fonds, en assure la conservation, exécute les dépenses ordonnées et transmet les justificatifs aux commissaires aux comptes. Ceux-ci contrôlent les opérations financières et en rendent compte à l’Assemblée générale.", "Les conseillers, désignés par le président pour leurs compétences et leur intégrité, apportent leur expertise. Le responsable de projets rédige, suit et évalue les projets et contribue à leur visibilité.", "Le responsable des relations externes et partenariats développe les réseaux de l’association. Le responsable juridique veille à la conformité et contribue au règlement des litiges."] },
          { heading: "Élection et fonctionnement", items: ["Les membres du Bureau sont élus au scrutin uninominal à un tour pour quatre ans, renouvelables une fois. En cas d’égalité, la voix du président-fondateur est prépondérante.", "La création de postes supplémentaires est prévue sur proposition du Bureau et ratification par les deux tiers de l’Assemblée générale ; les statuts prévoient aussi que le président peut créer et pourvoir des postes s’il le juge nécessaire.", "Le Bureau se réunit sur convocation du président au moins trois fois par an. Il décide à la majorité absolue des membres présents ou représentés ; les abstentions sont considérées comme un rejet des propositions. En cas de partage, la voix du président est prépondérante. Deux absences consécutives sans excuse valable peuvent entraîner qu’un membre soit considéré démissionnaire.", "Le secrétaire général rédige les procès-verbaux ; le président et deux autres membres désignés les signent. Les procès-verbaux sont inscrits dans un registre coté et paraphé par le président."] },
        ],
      },
      {
        title: "Assemblées générales",
        paragraphs: [],
        groups: [
          { heading: "Assemblée générale ordinaire", items: ["Elle réunit tous les membres au moins une fois par an, dans les six mois suivant la clôture de l’exercice. Elle peut être convoquée par le président-fondateur, le Bureau exécutif ou à la demande d’au moins deux tiers des membres, dont au moins trois membres du Bureau.", "Le président présente la situation morale et l’activité ; le trésorier présente sa gestion et le bilan financier. L’Assemblée examine les rapports, approuve les comptes, vote le budget suivant et élit les nouveaux membres du Bureau.", "Les demandes d’ajout à l’ordre du jour sont déposées au secrétariat général au moins cinq jours avant la réunion. La convocation et l’ordre du jour sont communiqués au moins dix jours à l’avance. Une procuration écrite et signée est possible, dans la limite d’un mandat porté par membre.", "Les statuts prévoient une décision à la majorité absolue des membres présents, avec au moins deux tiers des membres du Bureau exécutif, et précisent que le vote au bulletin secret est obligatoire."] },
          { heading: "Assemblée générale extraordinaire", items: ["Composée des membres fondateurs, du Bureau exécutif et des membres statutaires, elle est convoquée à la demande des deux tiers de ses membres.", "Elle peut modifier les statuts, prononcer la dissolution, statuer sur la dévolution des biens, décider une fusion avec une autre association ou une transformation. En cas d’égalité, la voix du président est prépondérante."] },
        ],
      },
      {
        title: "Ressources et dissolution",
        paragraphs: ["Les ressources prévues sont les cotisations, les dons et legs, les subventions des pouvoirs publics et des organisations internationales, les revenus d’événements caritatifs ou de partenariats et les financements obtenus pour des projets spécifiques.", "La dissolution ne peut être prononcée qu’en Assemblée générale extraordinaire. Une ou plusieurs personnes sont désignées pour liquider les biens ; après règlement des dettes, l’actif restant est attribué à une association poursuivant des objectifs similaires."],
        groups: [],
      },
    ],
    programmesLink: "Voir les missions et programmes",
  },
  en: {
    eyebrow: "Statutory overview",
    title: "How SmartEducation is organised",
    intro: "This summary presents the main provisions of the statutes supplied, dated December 2024. Missions and activities are described as the association’s planned remit.",
    sourceNote: "The supplied document leaves the date of establishment and signature blank, so no such dates are stated here. This page is a reading summary; the full statutes remain authoritative.",
    sections: [
      {
        title: "Identity, purpose and principles",
        paragraphs: ["The statutes name the association “Smart Education”, abbreviated “SMED”. They describe it as non-profit, non-political and secular, without distinction by sex, race or culture, and prohibit tribal discussions within the association.", "The preamble presents education as a fundamental right and a driver of human, economic and social development. It emphasises equal learning opportunities, educational innovation, support for vulnerable groups and cooperation with institutional, community and education partners. Solidarity, cooperation and responsibility are named as founding values. The text cites Cameroon’s Law No. 90/053 of 19 December 1990 on freedom of association."],
        groups: [],
      },
      {
        title: "Head office, duration and motto",
        paragraphs: ["The registered head office is in Yaoundé. It may be moved by the Executive Board after consulting General Assembly members, or by an Extraordinary General Assembly. Branches may be established in other locations anywhere in the world.", "The association has an unlimited duration. Its financial year runs from 1 January to 31 December. Its motto is “Quality education for all”."],
        groups: [],
      },
      {
        title: "Missions, objectives and planned activities",
        paragraphs: ["The statutory missions are to improve access to education, strengthen teaching quality, promote education for all, encourage non-formal education, integrate education with sustainable development, and strengthen awareness-raising and advocacy.", "The overall objective is to promote equitable access to quality education as a driver of human, economic and social development, empowerment, reduced inequalities and sustainable societies."],
        groups: [
          { heading: "Specific objectives", items: ["Reduce financial, geographic and social barriers, particularly for girls, children from disadvantaged families and people with disabilities; rehabilitate schools, classrooms and libraries; provide scholarships and school supplies.", "Train school leaders and teachers, modernise education infrastructure, and introduce teaching tools such as tablets, computers and digital platforms.", "Raise awareness of education and support marginalised or vulnerable groups to reduce social and gender disparities.", "Offer young people and adults technical and vocational training, workshops or practical courses that improve employability and economic independence.", "Teach learners about environmental, economic and social issues, and promote citizenship, peace, tolerance and social justice.", "Mobilise communities, governments, NGOs and international institutions to strengthen education policies."] },
          { heading: "Planned means of action", items: ["Education and training: tutoring, mentoring, school support, homework help, scholarships, literacy, digital-skills and personal-development workshops, vocational training and socio-professional integration.", "Awareness and advocacy: campaigns on girls’ education and preventing school dropouts; advocacy with public institutions and international organisations; conferences, seminars and forums.", "Infrastructure: build and renovate schools, libraries and training centres; equip them with books, computers, teaching resources and interactive boards; provide mobile libraries and community learning spaces.", "Inclusion: programmes for people with disabilities and refugee or displaced children, and teacher training in inclusive and innovative approaches.", "Partnerships: work with schools, universities and research centres on teaching innovation; collaborate with businesses to fund projects and open access to internships and jobs; organise national and international education and cultural exchanges."] },
        ],
      },
      {
        title: "Membership",
        paragraphs: ["The association includes the founder, active members (individuals or legal entities committed to its objectives), honorary members (for distinguished service) and benefactor members (financial or in-kind supporters). The founder, active and honorary members may vote at General Assemblies; the statutes give the president a casting vote in a tie."],
        groups: [
          { heading: "Admission as an active member", items: ["Submit a signed written application to the Executive Board, which may refuse it without stating its reasons.", "Accept the statutes and internal regulations and commit to active participation in the association’s responsibilities and activities.", "Pay a CFA 2,000 admission fee and a CFA 2,000 quarterly contribution."] },
          { heading: "Loss or suspension of membership", items: ["Membership ends by written resignation, death, exclusion for conduct contrary to the statutes or ethics or another serious reason, or removal for unpaid dues four months after their due date.", "Before exclusion for a serious reason, the member is invited by registered letter with acknowledgement of receipt to provide a written explanation.", "The Executive Board may impose a temporary suspension. During suspension, the member does not take part in the association’s activities; an elected mandate also ends under the statutes."] },
        ],
      },
      {
        title: "Governing bodies and Executive Board",
        paragraphs: ["The association has two governing bodies: the General Assembly, made up of the members, and the Executive Board, whose elected members manage day-to-day operations."],
        groups: [
          { heading: "Executive Board roles", items: ["The founder-president represents the association in civil matters and in court, convenes and chairs the Board, oversees its work and compliance with its rules, authorises expenses, and may create committees or posts.", "The vice-president supports the president and deputises in their absence.", "The secretary general maintains member records, drafts and registers documents, prepares report summaries and preserves the archives. The assistant secretary general supports and replaces them when needed.", "The treasurer collects and deposits funds, safeguards them, carries out authorised expenses and sends supporting documents to the accounts commissioners. The commissioners review financial operations and report to the General Assembly.", "Advisors appointed by the president for their expertise and integrity provide advice. The project lead prepares, monitors and evaluates projects and helps raise the association’s visibility.", "The external relations and partnerships lead develops the association’s networks. The legal officer monitors compliance and helps resolve disputes."] },
          { heading: "Election and operation", items: ["Board members are elected by single-member, one-round ballot for a four-year term, renewable once. The founder-president has the casting vote in a tie.", "Additional posts may be proposed by the Board and ratified by two thirds of the General Assembly; the statutes also allow the president to create and fill posts when considered necessary.", "The Board meets at the president’s request at least three times a year. Decisions are made by an absolute majority of members present or represented; abstentions count as rejecting the proposals. The president has the casting vote in a tie. Two consecutive unexcused absences may lead to a member being considered to have resigned.", "The secretary general prepares minutes; the president and two other designated Board members sign them. Minutes are entered in a numbered register initialled by the president."] },
        ],
      },
      {
        title: "General Assemblies",
        paragraphs: [],
        groups: [
          { heading: "Ordinary General Assembly", items: ["It includes all members and meets at least once a year, within six months after the financial year closes. It may be convened by the founder-president, the Executive Board or at the request of at least two thirds of the members, including at least three Board members.", "The president presents the association’s standing and activities; the treasurer presents financial management and the accounts. The Assembly reviews reports, approves the accounts, votes on the next budget and elects new Board members.", "Requests to add agenda items are submitted to the general secretariat at least five days before the meeting. Notice and agenda are sent at least ten days in advance. A written, signed proxy is allowed, with each member carrying no more than one.", "The statutes call for an absolute majority of members present, including at least two thirds of the Executive Board, and specify that votes must be by secret ballot."] },
          { heading: "Extraordinary General Assembly", items: ["It consists of founding members, the Executive Board and statutory members, and is convened at the request of two thirds of its members.", "It may amend the statutes, dissolve the association, decide how assets are allocated, approve a merger with another association or decide on transformation. The president has the casting vote in a tie."] },
        ],
      },
      {
        title: "Resources and dissolution",
        paragraphs: ["The listed resources are membership contributions, gifts and bequests, public and international grants, income from charitable events or partnerships, and funding for specific projects.", "Dissolution may only be decided by an Extraordinary General Assembly. One or more people are appointed to liquidate the assets; after liabilities are settled, remaining assets go to an association with similar objectives."],
        groups: [],
      },
    ],
    programmesLink: "Explore missions and programmes",
  },
} as const;

export default async function StatutesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const text = content[raw];

  return (
    <PageFrame locale={raw}>
      <article className="legal-page statutes-page container">
        <span className="eyebrow">{text.eyebrow}</span>
        <h1>{text.title}</h1>
        <p className="statutes-intro">{text.intro}</p>
        {text.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.groups.map((group) => (
              <div className="statute-group" key={group.heading}>
                <h3>{group.heading}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </section>
        ))}
        <p className="legal-note">{text.sourceNote}</p>
        <Link className="text-link" href={`/${raw}/programmes`}>{text.programmesLink}</Link>
      </article>
    </PageFrame>
  );
}
