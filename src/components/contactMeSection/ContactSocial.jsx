import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/naveen-kumar-19ba232b8" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/naveenkumar2194" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/naveen_kumar_tsz/profilecard/?igsh=d3ZtOGI1dzhoaGpx " Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
