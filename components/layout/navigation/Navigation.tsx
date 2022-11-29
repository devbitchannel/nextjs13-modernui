import Link from "next/link";
import React from "react";
import Logo from "../../../icons/Logo";
import { DesktopNavigation, MobileNavigation } from "./sub-components";

const Navigation = () => {
  return (
    <>
      <header>
        <nav className="z-20 flex items-center justify-between py-8 desktop:py-14">
          <Link href="/" className="navbar-brand">
            <Logo />
          </Link>
          <DesktopNavigation />
          <MobileNavigation />
        </nav>
      </header>
    </>
  );
};

export default Navigation;
