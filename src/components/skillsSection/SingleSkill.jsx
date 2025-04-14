import { motion } from "framer-motion";

const SingleSkill = ({ Icon, label }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <div className="flex flex-col items-center gap-2">
        {/* Icon Container with a gradient border and glowing effects */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-1 rounded-full">
          <div className="bg-white text-cyan-500 h-24 w-24 flex items-center justify-center rounded-full border-4 border-transparent transition-transform group-hover:scale-110">
            <Icon className="text-5xl" />
          </div>
        </div>
        <p className="text-white font-bold mt-2">{label}</p>
      </div>
      {/* Decorative glowing overlay */}
      <div
        className="absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gradient-to-br 
                   from-orange-500 to-pink-500 opacity-30 rounded-lg -z-10 group-hover:scale-105 transition-all duration-500"
      ></div>
    </motion.div>
  );
};

export default SingleSkill;
