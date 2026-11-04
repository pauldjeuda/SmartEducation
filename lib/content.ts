export type Locale = "fr" | "en";

export const copy = {
  fr: {
    nav: { home: "Accueil", about: "À propos", programs: "Nos actions", news: "Actualités", member: "Devenir membre", contact: "Contact" },
    cta: { explore: "Découvrir nos actions", member: "Rejoindre le mouvement", contact: "Échanger avec l’équipe", donate: "Soutenir nos actions" },
    footer: { line: "Une éducation de qualité, inclusive et équitable pour chaque apprenant.", navigation: "Navigation", contact: "Nous contacter", rights: "Tous droits réservés.", location: "Yaoundé, Simbock · Cameroun", imageCredits: "Images & crédits visuels" },
    hero: { eyebrow: "L’éducation ouvre les possibles", title: "Chaque enfant mérite une chance d’apprendre.", body: "SmartEducation agit avec les communautés pour rendre l’éducation de qualité plus accessible, plus inclusive et plus équitable.", card: "L’apprentissage ne devrait jamais dépendre du lieu où l’on grandit.", students: "Une éducation ouverte à toutes et tous" },
    intro: { eyebrow: "Notre engagement", title: "Une façon plus juste d’apprendre et de grandir", body: "Nous travaillons aux côtés des communautés pour lever les obstacles à la scolarisation et créer des conditions d’apprentissage plus dignes et durables." },
    values: { eyebrow: "Nos valeurs", title: "Ce qui nous guide, chaque jour", body: "Des principes concrets qui orientent nos actions et notre manière de travailler avec les communautés.", commitment: "Engagement", commitmentText: "Nous nous investissons durablement auprès des communautés.", innovation: "Innovation", innovationText: "Nous imaginons des réponses pédagogiques adaptées aux défis actuels.", impact: "Impact social", impactText: "Nous contribuons à réduire les inégalités d’accès à l’éducation.", excellence: "Excellence pédagogique", excellenceText: "Nous défendons des pratiques d’enseignement de qualité." },
    programs: { eyebrow: "Nos programmes", title: "Des actions concrètes, au plus près du terrain", body: "Nous concentrons nos efforts sur les besoins essentiels des apprenants, des enseignants et de leurs communautés.", more: "En savoir plus" },
    news: { eyebrow: "La vie de l’association", title: "Sur le terrain", body: "Quelques nouvelles et initiatives partagées par SmartEducation.", more: "Lire l’article", all: "Toutes les actualités" },
    join: { eyebrow: "Ensemble, faisons avancer l’éducation", title: "À chacun sa façon de contribuer.", body: "Devenez membre, partagez vos compétences ou échangez avec notre équipe au sujet de nos actions.", button: "Parlons-en" },
    contact: { eyebrow: "Contact", title: "Construisons des liens utiles", body: "Une question, une idée de partenariat ou l’envie de rejoindre le mouvement ? Écrivez-nous ou appelez-nous." },
    about: { eyebrow: "À propos de SmartEducation", title: "Une éducation de qualité pour toutes et tous", body: "SmartEducation œuvre pour l’autonomisation des individus, la réduction des inégalités et la construction de sociétés durables à travers des actions concrètes et inclusives.", mission: "Notre mission", missionText: "Contribuer à un système éducatif ouvert à toutes et tous, en soutenant les apprenants et les communautés qui font vivre l’école.", vision: "Notre vision", visionText: "Une société où chaque apprenant a accès à une éducation de qualité, inclusive et équitable." },
    approach: { eyebrow: "Notre démarche", title: "Écouter, agir, construire dans la durée", body: "L’accès à l’éducation dépend de plusieurs réalités qui se répondent : les conditions d’apprentissage, l’engagement des communautés et l’accompagnement pédagogique.", steps: [{ title: "Comprendre les besoins", text: "Partir des réalités des apprenants, des familles et des équipes éducatives." }, { title: "Agir ensemble", text: "Associer les communautés aux initiatives qui soutiennent la scolarisation." }, { title: "Renforcer les conditions", text: "Encourager des environnements et des pratiques propices aux apprentissages." }] },
  },
  en: {
    nav: { home: "Home", about: "About", programs: "Our work", news: "News", member: "Become a member", contact: "Contact" },
    cta: { explore: "Discover our work", member: "Join the movement", contact: "Talk with our team", donate: "Support our work" },
    footer: { line: "Quality, inclusive and equitable education for every learner.", navigation: "Navigation", contact: "Get in touch", rights: "All rights reserved.", location: "Yaoundé, Simbock · Cameroon", imageCredits: "Images & credits" },
    hero: { eyebrow: "Education opens possibilities", title: "Every child deserves the chance to learn.", body: "SmartEducation works with communities to make quality education more accessible, inclusive and equitable.", card: "Learning should never depend on where you grow up.", students: "Education open to everyone" },
    intro: { eyebrow: "Our commitment", title: "A fairer way to learn and grow", body: "We work alongside communities to remove barriers to schooling and create more dignified, lasting learning conditions." },
    values: { eyebrow: "Our values", title: "What guides us, every day", body: "Practical principles that shape our work and the way we work with communities.", commitment: "Commitment", commitmentText: "We invest in lasting work with communities.", innovation: "Innovation", innovationText: "We develop educational responses to today’s challenges.", impact: "Social impact", impactText: "We contribute to reducing inequalities in access to education.", excellence: "Educational excellence", excellenceText: "We champion quality teaching practices." },
    programs: { eyebrow: "Our programmes", title: "Practical action, close to communities", body: "We focus our efforts on the essential needs of learners, teachers and their communities.", more: "Learn more" },
    news: { eyebrow: "Life at SmartEducation", title: "From the field", body: "News and initiatives shared by SmartEducation.", more: "Read story", all: "All news" },
    join: { eyebrow: "Together, let’s move education forward", title: "There are many ways to contribute.", body: "Become a member, share your skills, or talk with our team about our work.", button: "Let’s talk" },
    contact: { eyebrow: "Contact", title: "Let’s build useful connections", body: "A question, a partnership idea, or interested in joining? Write or call us." },
    about: { eyebrow: "About SmartEducation", title: "Quality education for everyone", body: "SmartEducation works for individual empowerment, inequality reduction, and building sustainable societies through concrete and inclusive actions.", mission: "Our mission", missionText: "Contribute to an education system open to everyone by supporting learners and the communities that make schools work.", vision: "Our vision", visionText: "A society where every learner can access quality, inclusive and equitable education." },
    approach: { eyebrow: "Our approach", title: "Listen, act, build for the long term", body: "Access to education depends on connected realities: learning conditions, community involvement and educational support.", steps: [{ title: "Understand needs", text: "Start from the realities of learners, families and education teams." }, { title: "Act together", text: "Involve communities in initiatives that support school attendance." }, { title: "Strengthen conditions", text: "Encourage environments and practices that support learning." }] },
  },
} as const;

export const programData = {
  fr: [
    { id: "soutien-scolaire", category: "Éducation", title: "Soutien à l’éducation", description: "Des programmes de tutorat dans les zones rurales où les infrastructures et les ressources pédagogiques manquent.", image: "/images/classroom.jpg", alt: "Des élèves attentifs pendant un cours en classe" },
    { id: "sensibilisation", category: "Communauté", title: "Sensibilisation et plaidoyer", description: "La mobilisation des communautés villageoises autour de l’importance de la scolarisation.", image: "/images/community-learning.jpg", alt: "Un enseignant accompagne des élèves dans leur apprentissage" },
    { id: "infrastructures", category: "Infrastructures", title: "Infrastructures scolaires", description: "La réhabilitation de salles de classe en matériaux provisoires et leur équipement en bancs.", image: "/images/teacher.jpg", alt: "Une séance d’apprentissage accompagnée par un enseignant" },
  ],
  en: [
    { id: "soutien-scolaire", category: "Education", title: "Education support", description: "Tutoring programmes in rural areas where infrastructure and learning resources are scarce.", image: "/images/classroom.jpg", alt: "Students paying attention during a classroom lesson" },
    { id: "sensibilisation", category: "Community", title: "Community awareness and advocacy", description: "Mobilising village communities around the importance of schooling.", image: "/images/community-learning.jpg", alt: "A teacher supporting students in their learning" },
    { id: "infrastructures", category: "Infrastructure", title: "School infrastructure", description: "Rehabilitating classrooms built with temporary materials and equipping them with benches.", image: "/images/teacher.jpg", alt: "A learning session supported by a teacher" },
  ],
} as const;

export const newsData = {
  fr: [
    { slug: "soutien-en-zone-rurale", date: "15 novembre 2023", title: "Soutien en zone rurale", excerpt: "Distribution de cahiers dans une école en bois de la région Est.", body: "SmartEducation partage une action de soutien à l’apprentissage menée dans une école en bois de la région Est : la distribution de cahiers aux élèves. L’accès aux fournitures scolaires contribue aux conditions dans lesquelles les enfants peuvent suivre leurs cours." },
    { slug: "formation-des-enseignants", date: "10 octobre 2023", title: "Formation des enseignants", excerpt: "Des ateliers pour les enseignants travaillant sans électricité ni matériel moderne.", body: "Des ateliers ont été organisés pour des enseignants qui travaillent sans électricité ni matériel moderne. Cette initiative met l’accent sur l’accompagnement pédagogique dans des conditions de travail difficiles." },
    { slug: "renovation-participative", date: "5 septembre 2023", title: "Rénovation participative", excerpt: "Les parents d’élèves reconstruisent les murs d’une salle de classe.", body: "Des parents d’élèves se sont mobilisés pour reconstruire les murs d’une salle de classe. Cette initiative illustre le rôle que les communautés peuvent jouer dans l’amélioration de leur environnement scolaire." },
  ],
  en: [
    { slug: "soutien-en-zone-rurale", date: "November 15, 2023", title: "Support in a rural area", excerpt: "Exercise books distributed at a wooden school in the Eastern Region.", body: "SmartEducation shares a learning support initiative at a wooden school in the Eastern Region: exercise books were distributed to students. Access to school supplies helps create conditions in which children can take part in lessons." },
    { slug: "formation-des-enseignants", date: "October 10, 2023", title: "Teacher training", excerpt: "Workshops for teachers working without electricity or modern equipment.", body: "Workshops were held for teachers working without electricity or modern equipment. The initiative focuses on pedagogical support in challenging working conditions." },
    { slug: "renovation-participative", date: "September 5, 2023", title: "A community-led renovation", excerpt: "Parents are rebuilding the walls of a classroom.", body: "Parents came together to rebuild the walls of a classroom. The initiative illustrates the role communities can play in improving their school environment." },
  ],
} as const;

export function isLocale(value: string): value is Locale {
  return value === "fr" || value === "en";
}
