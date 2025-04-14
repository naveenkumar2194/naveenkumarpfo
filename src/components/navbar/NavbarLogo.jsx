import React from 'react';

const NavbarLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Full name visible on medium screens and up */}
      <h1 className="hidden md:inline-block text-white text-2xl font-bold tracking-wide transition-transform duration-300 ease-in-out hover:scale-105">
        Naveen Kumar
      </h1>
      {/* Abbreviated logo for small screens */}
      <h1 className="md:hidden inline-block text-white font-special font-extrabold text-4xl transition-colors duration-300 ease-in-out hover:text-orange-400">
        Naveen
      </h1>
    </div>
  );
};

export default NavbarLogo;
