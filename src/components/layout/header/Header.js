"use client";

import { useEffect } from "react";
import MobileMenu from "./MobileMenu";
import mobileMenu from "@/libs/mobileMenu";
import HeaderLarge from "./HeaderLarge";
import HeaderMobile from "./HeaderMobile";
import stickyHeader from "@/libs/stickyHeader";

const Header = () => {
  useEffect(() => {
    mobileMenu();
    stickyHeader();
  }, []);

  return (
    <>
      <header className="header__sticky">
        <div className="headerarea headerarea__transparent headerarea--1 main__header">
          <HeaderLarge />
          <HeaderMobile />
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;
