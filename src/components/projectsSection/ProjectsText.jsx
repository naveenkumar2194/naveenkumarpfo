import { motion } from "framer-motion";

const ProjectsText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col items-center mt-24 px-4 text-center"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-cyan mb-6 tracking-wide">
        Projects
      </h2>

      <p className="text-base md:text-lg max-w-2xl text-lightGrey leading-relaxed">
        I have developed and contributed to a diverse range of AI-based projects —
        from intelligent problem-solving solutions to deep learning models tackling
        complex real-world scenarios with precision and innovation.
      </p>
    </motion.div>
  );
};

export default ProjectsText;
