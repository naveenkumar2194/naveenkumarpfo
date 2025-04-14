import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";


const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
    </div>
  );
};

export default ExperienceTop;
