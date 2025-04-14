import React from "react";
import { motion } from "framer-motion";

const SkillsCircle = () => {
  return (
    <motion.div
      // Apply a slight scale and rotation on hover for a dynamic effect
      whileHover={{ scale: 1.05, rotate: 5 }}
      transition={{ duration: 0.3 }}
      className="relative h-48 w-48 rounded-full flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
    >
      {/* Gradient overlay with pulsating (glowing) effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 opacity-70 animate-pulse z-0"></div>
      
      {/* Main Image Container */}
      <div className="relative z-10 h-full w-full border-2 border-orange-500 rounded-full overflow-hidden shadow-lg">
        <img
          src="/images/skills.avif"
          alt="My Skills"
          className="object-cover w-full h-full"
        />
      </div>
    </motion.div>
  );
};

export default SkillsCircle;
