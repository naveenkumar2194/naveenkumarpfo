import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const particleOptions = {
  particles: {
    number: { value: 20, density: { enable: true, value_area: 500 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
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

const FooterLine = () => {
  return (
    <div className="relative w-full h-16 my-4">
      {/* Particle Background */}
      <Particles className="absolute inset-0 z-0" params={particleOptions} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-50 z-10"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-center w-full h-full"
      >
        <p className="text-xl font-semibold text-white drop-shadow-lg">
          FooterLine
        </p>
      </motion.div>
    </div>
  );
};

export default FooterLine;
