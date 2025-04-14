import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AboutMeMain = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, window.innerHeight], [15, -15]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-15, 15]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div
      id="about"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden mt-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center justify-between z-10"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          particles: {
            color: { value: "#00FFFF" },
            links: { enable: true, color: "#00FFFF", distance: 150 },
            move: { enable: true, speed: 1 },
            number: { value: 50 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-90 z-0" />

      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="w-full md:w-1/2 z-10"
      >
        <AboutMeText />
      </motion.div>

      <motion.div
        style={{ rotateX, rotateY }}
        className="w-full md:w-1/2 flex justify-center z-10"
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="rounded-3xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-700">
          <AboutMeImage />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
