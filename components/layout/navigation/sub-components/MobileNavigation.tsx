import React, { useState } from "react";
import { navbarLinks } from "../data/navbarLinks";
import Link from "next/link";
import MenuOpen from "../../../../icons/MenuOpen";
import MenuClose from "../../../../icons/MenuClose";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="margin-0 border-none p-0 ring-0 md:hidden"
      >
        <MenuOpen />
      </button>
      <ul
        className={`fixed ${
          isOpen ? "right-0" : "-right-full"
        } top-0 z-50 flex h-screen w-[65%] flex-col bg-off-white px-6 py-8 transition-all before:absolute before:top-0 ${
          isOpen ? "before:-left-full" : "before:hidden before:opacity-0"
        }  before:z-10 before:h-screen before:w-full before:bg-black before:opacity-20`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="margin-0 self-end border-none p-0 ring-0"
        >
          <MenuClose />
        </button>
        <li className="mt-24 flex flex-col gap-6">
          {navbarLinks.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              onClick={() => setIsOpen(false)}
              className="text-lg text-very-dark-blue"
            >
              {link.title}
            </Link>
          ))}
        </li>
      </ul>
    </>
  );
};

export default MobileNavigation;
