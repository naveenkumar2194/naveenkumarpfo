import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I’m NaveenKumar, a dedicated tech enthusiast with a background in 
      Diploma in Computer Science and currently pursuing B.Tech in Artificial 
      Intelligence and Data Science. I’m passionate about building smart, real-time 
      solutions using AI, IoT. My interests lie in creating intelligent systems that 
      blend innovation with practical impact. I specialize in TinyML, custom LLMs, and 
      AI-powered platforms. I enjoy turning complex challenges into user-friendly applications. 
      Learning, building, and sharing knowledge is what drives me every day.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
