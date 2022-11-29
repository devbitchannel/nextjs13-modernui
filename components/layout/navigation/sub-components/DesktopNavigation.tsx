import Link from "next/link";
import React from "react";
import { navbarLinks } from "../data/navbarLinks";

const DesktopNavigation = () => {
  return (
    <ul className="hidden md:flex">
      <li className="flex gap-8 font-normal  ">
        {navbarLinks.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className="text-paragraph font-normal text-dark-grayish-blue transition-colors hover:text-soft-red"
          >
            {link.title}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default DesktopNavigation;
