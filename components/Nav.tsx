"use client";
import React from "react";
import { usePathname } from "next/navigation";

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
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            className={`${
              link.path === pathname &&
              "text-blue-600 border-b-2 border-blue-600"
            } capitalize font-medium hover:text-blue-600 transition-colors duration-200`}
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
