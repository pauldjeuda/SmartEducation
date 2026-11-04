import Link from "next/link";

export default function OfflinePage() {
  return <main className="offline-page"><span className="offline-mark">SM<br />ED</span><span className="eyebrow">SmartEducation</span><h1>Vous êtes hors ligne.</h1><p>Cette page n’est pas encore disponible sans connexion. Réessayez lorsque votre réseau sera rétabli.</p><Link className="button button-orange" href="/fr">Retour à l’accueil</Link><a className="offline-contact" href="mailto:contact@smarteducation.cm">contact@smarteducation.cm</a></main>;
}
