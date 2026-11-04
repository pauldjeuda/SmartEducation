"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

export function ContactForm({ locale, membership = false }: { locale: "fr" | "en"; membership?: boolean }) {
  const [opened, setOpened] = useState(false);
  const isFr = locale === "fr";
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = membership ? (isFr ? "Demande d’information sur l’adhésion" : "Membership information request") : (isFr ? "Message depuis le site SmartEducation" : "Message from the SmartEducation website");
    const body = `${isFr ? "Nom" : "Name"}: ${name}\n${isFr ? "E-mail" : "Email"}: ${email}\n\n${message}`;
    window.location.href = `mailto:contact@smarteducation.cm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }
  return <form className="contact-form" onSubmit={handleSubmit}>
    <label>{isFr ? "Votre nom" : "Your name"}<input name="name" autoComplete="name" required placeholder={isFr ? "Comment vous appeler ?" : "How should we address you?"} /></label>
    <label>{isFr ? "Votre adresse e-mail" : "Your email address"}<input name="email" type="email" autoComplete="email" required placeholder="nom@exemple.com" /></label>
    <label>{isFr ? "Votre message" : "Your message"}<textarea name="message" rows={5} required placeholder={isFr ? "Écrivez-nous quelques mots…" : "Write us a few words…"} /></label>
    <button className="button button-orange" type="submit"><Mail size={17} />{isFr ? "Préparer mon e-mail" : "Prepare my email"}<ArrowUpRight size={16} /></button>
    <p className="form-note">{opened ? (isFr ? "Votre messagerie devrait s’ouvrir. Vous pourrez vérifier le message avant de l’envoyer." : "Your email app should open. You can review the message before sending.") : (isFr ? "Le bouton prépare un message dans votre application e-mail. Rien n’est envoyé automatiquement." : "This opens a prepared message in your email app. Nothing is sent automatically.")}</p>
  </form>;
}
