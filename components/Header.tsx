"use client";
import React, { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { CiMenuKebab } from "react-icons/ci";
import DesktopNav from "./DesktopNav";

export default function Header() {
  const [navactive, setNavActive] = useState<boolean>(false);
  return (
    <header className="relative p-5 sm:pt-5 sm:pl-10 sm:pr-10 flex items-center justify-between">
      <Link href="/">
        <h1 className="font-mono font-semibold text-slate-600 text-3xl">
          Misho's Dev Lab
        </h1>
      </Link>

      {/* Desktop nav */}
      <DesktopNav />

      {/* Mobile Nav & Mobile nav menu button */}
      {navactive && <Nav />}
      <Button onClick={() => setNavActive(!navactive)}>
        <CiMenuKebab size={30} className="text-slate-600 md:hidden" />
      </Button>
    </header>
  );
}
