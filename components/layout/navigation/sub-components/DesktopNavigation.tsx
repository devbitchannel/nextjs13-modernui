import Link from "next/link";
import React from "react";
import { navbarLinks } from "../data/navbarLinks";

const DesktopNavigation = () => {
  return (
    <ul className="hidden gap-8 font-normal md:flex">
      {navbarLinks.map((link) => (
        <li>
          <Link
            href={link.href}
            key={link.id}
            className="text-paragraph font-normal text-dark-grayish-blue transition-colors hover:text-soft-red"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavigation;
