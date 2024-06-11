import "./style.css";

import "./tailwind.css";
import React from "react";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link.js";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 max-w-5xl m-auto">
      <Navbar>
        <div className="flex w-full gap-2">
          <Logo />
        <Link href="/" className="flex items-center py-5 px-2">Welcome</Link>
        <Link href="/trivia" className="flex items-center py-5 px-2">Trivia</Link></div>
        <div className="flex"><button>Signin</button></div>
          
      </Navbar>
      <Content>{children}</Content>
    </div>
  );
}

function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav
      id="navbar"
      className="flex justify-between h-[5rem]"
    >
      {children}
    </nav>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <main id="page-container">
      <section id="page-content">
    {children}
  </section>
  </main>
  );
}

function Logo() {
  return (
    <picture className="flex items-center -ml-3">
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </picture>
  );
}
