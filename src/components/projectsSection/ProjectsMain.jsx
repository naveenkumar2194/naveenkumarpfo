import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const projects = [
  {
    name: "SMS Spam Detection Using ML",
    year: "Mar 2023",
    align: "right",
    /*image: "../../public/images/web1.png",*/
    image: "/images/web1.png",
    link: "#",
  },
  {
    name: "Decentralised Healthcare Data Management System",
    year: "Dec 2024",
    align: "left",
    /*image: "../../public/images/dec.jpg",*/
    image: "/images/dec.jpg",
    link: "https://github.com/naveenkumar2194/Decentralised-healthcare-data-management-system.git",
  },
];

const ProjectsMain = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div id="projects" className="relative max-w-[1200px] mx-auto px-4">
      {/* Particles background */}
      <Particles
        id="projects-particles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 30 },
            color: { value: "#00FFFF" },
            opacity: { value: 0.6 },
            size: { value: 1 },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
        }}
        className="absolute inset-0 opacity-20"
      />

      <motion.div
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10"
      >
        <ProjectsText />
      </motion.div>

      <div className="relative z-10 flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
