import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, body, side = false, children }: { eyebrow: string; title: string; body?: string; side?: boolean; children?: ReactNode }) {
  return <div className={`section-heading${side ? " section-heading-side" : ""}`}><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{body && <p>{body}</p>}{children}</div>;
}
