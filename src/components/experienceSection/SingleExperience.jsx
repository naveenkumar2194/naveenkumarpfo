import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  const isUpcoming = experience.type === "upcoming";

  return (
    <motion.div
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView="show"
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-gradient-to-br from-[#1a1a3c] via-[#060631] to-[#420505] text-white shadow-lg hover:shadow-cyan-400/60 border border-cyan-500 rounded-3xl p-6 w-full max-w-[280px] backdrop-blur-md"
    >
      <div className="mb-3">
        <p className="font-bold text-xl text-cyan-400 tracking-wide">
          {experience.job}
        </p>
        <p className="text-sm text-orange-300 mt-1">{experience.company}</p>
        <p className="text-xs text-lightGrey mt-1">{experience.date}</p>
      </div>

      {!isUpcoming ? (
        <ul className="list-disc pl-4 text-sm space-y-2 text-lightGrey leading-relaxed">
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 text-center text-orange-400 font-semibold animate-pulse">
          🚧 Details Coming Soon
        </div>
      )}
    </motion.div>
  );
};

export default SingleExperience;
