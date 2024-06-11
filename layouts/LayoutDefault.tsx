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
      <Sidebar>
        <Logo />
        <Link href="/" className="flex items-center" >Welcome</Link>
        <Link href="/trivia" className="flex items-center">Trivia</Link>
      </Sidebar>
      <Content>{children}</Content>
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="sidebar"
      className="px-5 gap-5 flex h-[5rem]"
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div id="page-content" className="">
        {children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center">
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
