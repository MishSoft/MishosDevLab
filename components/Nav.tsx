"use client";
import React from "react";
import { usePathname } from "next/navigation";
import path from "path";
import Link from "next/link";

const links = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Services",
    path: "/services",
  },

  {
    name: "Resume",
    path: "/resume",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="absolute duration-200 transition-all left-0 items-center justify-evenly top-[100%] w-full h-screen flex flex-col border">
      {links.map((link, index) => {
        return (
          <Link
            className="font-mono text-xl hover:text-blue-600 transition-all duration-150"
            key={index}
            href={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
