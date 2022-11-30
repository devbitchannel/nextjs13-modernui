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
      <div
        onClick={() => setIsOpen(false)}
        className={`
        ${isOpen ? "block" : "hidden"}
        fixed top-0 left-0
        right-0 z-10 h-screen w-full bg-black opacity-20
        `}
      />

      <div
        className={`fixed ${
          isOpen ? "right-0" : "-right-full"
        } top-0 z-50 flex h-screen w-[65%] flex-col bg-off-white px-6 py-8 transition-all`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="margin-0 self-end border-none p-0 ring-0"
        >
          <MenuClose />
        </button>
        <ul className="mt-24 flex flex-col gap-6">
          {navbarLinks.map((link) => (
            <li className="">
              <Link
                href={link.href}
                key={link.id}
                onClick={() => setIsOpen(false)}
                className="text-lg text-very-dark-blue"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;
