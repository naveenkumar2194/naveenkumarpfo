import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const footerLinks = [
  { name: "About Me", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Experience", section: "experience" },
  { name: "Projects", section: "projects" },
];

const particleOptions = {
  particles: {
    number: { value: 30, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 2, random: true },
    move: { enable: true, speed: 1, direction: "none", random: true, straight: false },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false },
    },
  },
  retina_detect: true,
};

const FooterMain = () => {
  return (
    <div className="relative px-4">
      {/* Particle Background */}
      <Particles className="absolute inset-0 z-0" params={particleOptions} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-20 max-w-[1200px] mx-auto"
      >
        <div className="w-full h-[1px] bg-lightGrey mt-24" />

        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-3xl text-lightGrey mb-4 md:mb-0"
          >
            Naveen Kumar
          </motion.p>
          <ul className="flex gap-4 text-lightGrey text-xl">
            {footerLinks.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, textShadow: "0 0 8px #fff" }}
                className="cursor-pointer transition-all duration-500"
              >
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <p className="text-right mt-2 mb-12 text-sm text-lightBrown">
          © 2025 Naveen Kumar | All Rights Reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default FooterMain;
