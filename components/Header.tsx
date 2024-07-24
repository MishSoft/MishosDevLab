"use client";
import React, { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { CiMenuKebab } from "react-icons/ci";
import DesktopNav from "./MobileNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [navactive, setNavActive] = useState<boolean>(false);
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">Misho's Dev Lab</h1>
        </Link>

        {/* Desktop Nav & Hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

/*
<Link href="/">
        <h1 className="font-mono font-semibold text-slate-600 text-3xl">
          Misho's Dev Lab
        </h1>
      </Link>

      <DesktopNav />

   
      {navactive && <Nav />}
      <Button className="md:hidden" onClick={() => setNavActive(!navactive)}>
        <CiMenuKebab size={30} className="text-slate-600 " />
      </Button>

*/
