import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    type: "live",
    job: "Lab Technician",
    company: "Kongunadu College of Engineering and Technology",
    date: "2023-12-28 - 2024-07-06",
    responsibilities: [
      "Handled software installations, updates, and configurations.",
      "Maintained network connectivity and security across all devices.",
      "Conducted routine maintenance to ensure system stability and uptime.",
      "Collaborated with staff to optimize performance and resolve issues.",
    ],
  },
  {
    type: "upcoming",
    job: "Coming Soon",
    company: "Stay Tuned",
    date: "Future Role",
    responsibilities: [],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10 w-full">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center gap-6">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="hidden lg:block"
            >
              <FaArrowRightLong className="text-3xl text-cyan-400 animate-pulse" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;
