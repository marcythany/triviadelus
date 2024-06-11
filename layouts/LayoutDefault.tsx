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
        <Logo />
        <Link href="/" className="flex items-center" >Welcome</Link>
        <Link href="/trivia" className="flex items-center">Trivia</Link>
      </Navbar>
      <Content>{children}</Content>
    </div>
  );
}

function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav
      id="navbar"
      className="px-5 gap-5 flex h-[5rem]"
    >
      {children}
    </nav>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
      <main id="page-content" className="">
        {children}
      </main>
  );
}

function Logo() {
  return (
    <picture className="flex items-center">
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </picture>
  );
}
