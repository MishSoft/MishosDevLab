import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/MishSoft" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/misho-aspanidze-5133b0261/",
  },
];

export default function Socials({ containerStyles, iconStyles }: any) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
            href={item.path}
            key={index}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
