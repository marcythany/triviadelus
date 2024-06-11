import React from "react";
import { usePageContext } from "vike-react/usePageContext";

export function Link({ href, children, className }: { href: string; children: string; className?: string }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <a href={href} className={`${className} ${isActive ? "is-active" : undefined}`}>
      {children}
    </a>
  );
}
