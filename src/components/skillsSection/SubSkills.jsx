import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const particleOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: { value: ["#ffffff", "#00ffc3", "#ff00c8"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 3,
      random: true,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
};

const SubSkills = () => {
  return (
    <div className="relative border-y-2 border-lightGrey overflow-hidden">
      {/* Particle Background */}
      <Particles className="absolute inset-0 z-0" params={particleOptions} />

      {/* Gradient Overlay with pulsating glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-cyan-500 opacity-50 animate-pulse z-10"></div>

      {/* Animated Image */}
      <motion.img
        src="/images/subSkills.jpg"
        alt="subSkills image"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-20 object-cover w-full h-full"
      />
    </div>
  );
};

export default SubSkills;
