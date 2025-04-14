import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      className={`relative text-2xl p-3 border border-orange rounded-full transition-transform duration-300 ease-in-out ${
        menuOpen ? 'rotate-60' : ''
      }`}
      onClick={handleToggleMenu}
    >
      <div className="flex flex-col items-center justify-center space-y-1">
        <div
          className={`w-6 h-1 bg-orange transition-transform duration-300 ease-in-out ${
            menuOpen ? 'rotate-45 absolute' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-orange transition-opacity duration-300 ease-in-out ${
            menuOpen ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-orange transition-transform duration-300 ease-in-out ${
            menuOpen ? '-rotate-45 absolute' : ''
          }`}
        ></div>
      </div>
    </button>
  );
};

export default NavbarToggler;
