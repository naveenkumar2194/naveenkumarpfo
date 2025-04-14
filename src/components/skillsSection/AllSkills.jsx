import { motion } from "framer-motion";
import skills from "../skillsSection/SkillsData";
import { fadeIn } from "../../framerMotion/variants";
import Particles from "react-tsparticles";

// Particle configuration settings
const particleOptions = {
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

const AllSkills = () => {
  return (
    <div className="relative min-h-screen">
      {/* Particle Background */}
      <Particles className="absolute inset-0 z-0" params={particleOptions} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-75 z-10"></div>
      
      {/* Main Content */}
      <div className="relative z-20 py-12 px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((item, index) => (
            <motion.div
              key={item.skill}
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="bg-gray-800 rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg 
                         hover:scale-105 transition-transform duration-300 group"
            >
              <div
                className="text-5xl text-white group-hover:text-teal-400 mb-3 
                           drop-shadow-[0_0_8px_rgba(0,255,255,0.7)] transition-all ease-in-out"
              >
                <item.icon />
              </div>
              <p className="text-white text-lg font-medium group-hover:text-teal-300">
                {item.skill}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
