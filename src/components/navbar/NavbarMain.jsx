import React from 'react';
import { useSelector } from "react-redux";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-20 w-full max-w-[1300px] px-4">
      <div className="flex items-center justify-between bg-black border border-orange border-[0.5px] rounded-full p-6 max-w-[1200px] mx-auto">
        <NavbarLogo />
        {/* Desktop: show NavbarLinks in main navbar */}
        <div className="hidden lg:flex flex-1 ml-8">
          <NavbarLinks />
        </div>
        <div className="flex items-center gap-4">
          <NavbarBtn />
          {/* Mobile: show toggler only */}
          <div className="block lg:hidden">
            <NavbarToggler />
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu: appears only when toggled */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full right-4 z-50 bg-black/50 backdrop-blur-md px-4 py-6 rounded-xl mt-2">
          <NavbarLinks />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
