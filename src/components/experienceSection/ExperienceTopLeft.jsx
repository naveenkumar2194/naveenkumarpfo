import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      className="flex flex-col items-center gap-6 w-[300px] p-6 rounded-2xl bg-gradient-to-b from-[#1e1e1e] to-[#0f0f0f] shadow-md border border-darkGrey"
    >
      <p className="text-orange text-2xl md:text-3xl font-bold uppercase font-special tracking-wide text-center">
        Since 2023 - 2024
      </p>

      <div className="flex justify-center items-center gap-6">
        <span className="text-5xl text-lightBrown font-bold"></span>
        <ExperienceInfo number="120+" text="Systems" />
      </div>

      <p className="text-center text-lightGrey text-sm leading-relaxed">
        Over the past{" "}
        <span className="text-white font-semibold">6 months</span>, I've managed{" "}
        <span className="text-white font-semibold">120+ systems</span>,
        focusing on system administration and network configuration with
        reliable uptime and secure performance.
      </p>
    </motion.div>
  );
};

export default ExperienceTopLeft;
