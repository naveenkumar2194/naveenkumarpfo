import { motion } from "framer-motion";

const SubHeroMain = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full border-y border-lightGrey bg-[#1a1a1a] text-lightGrey flex flex-wrap justify-center uppercase py-6 md:py-8 gap-8 text-center"
    >
      <p className="text-2xl md:text-3xl xl:text-4xl tracking-widest hover:text-orange transition duration-300">
        Fast Learner
      </p>
      <p className="text-2xl md:text-3xl xl:text-4xl tracking-widest hover:text-orange transition duration-300">
        Team Work
      </p>
      <p className="text-2xl md:text-3xl xl:text-4xl tracking-widest hover:text-orange transition duration-300">
        Details Master
      </p>
    </motion.div>
  );
};

export default SubHeroMain;
