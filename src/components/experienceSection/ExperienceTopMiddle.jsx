import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceTopMiddle = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      className="relative group lg:w-[35%] md:w-[50%] sm:w-[80%] rounded-xl overflow-hidden shadow-xl"
    >
      <img
        src="/images/experience-image.png"
        alt="My Experience"
        className="w-full h-auto transition duration-500 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-50 group-hover:opacity-75 transition duration-500"></div>
    </motion.div>
  );
};

export default ExperienceTopMiddle;
