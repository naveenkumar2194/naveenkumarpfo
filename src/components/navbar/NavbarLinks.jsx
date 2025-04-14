import React from 'react';
import { Link } from "react-scroll";
import { FaUser, FaLightbulb, FaBriefcase, FaEnvelope, FaCode } from "react-icons/fa";

const links = [
  { icon: <FaUser />, label: "About", section: "about" },
  { icon: <FaCode />, label: "Skills", section: "skills" },
  { icon: <FaBriefcase />, label: "Experience", section: "experience" },
  { icon: <FaLightbulb />, label: "Projects", section: "projects" },
  { icon: <FaEnvelope />, label: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col gap-4 text-white font-body lg:flex-row lg:ml-auto">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="cursor-pointer transition-all duration-500 hover:scale-110 hover:border-orange"
          >
            {/* Mobile: icon-only circular button */}
            <div className="block lg:hidden text-white border border-cyan rounded-full p-3 bg-gradient-to-r from-darkCyan to-orange shadow-md hover:shadow-cyanShadow flex items-center justify-center">
              {link.icon}
            </div>
            {/* Desktop: icon with text label */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-orange/20 transition-all duration-300">
              <span className="text-xl">{link.icon}</span>
              <span>{link.label}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
