import React from "react";
import AllSkills from "./AllSkills";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Particles from "react-tsparticles";

const SkillsMain = () => {
  // Configuration options for the particle background.
  const particlesOptions = {
    particles: {
      number: {
        value: 50,
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

  return (
    <div id="skills" className="relative overflow-hidden">
      {/* Particle Background */}
      <Particles className="absolute inset-0 z-0" params={particlesOptions} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-60 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-[1200px] px-4 mx-auto min-h-[600px]">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="mb-12"
        >
          <SkillsText />
        </motion.div>
        <div className="mt-12">
          <AllSkills />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
