import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradient from "./HeroGradient";

const HeroMain = () => {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <HeroGradient />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <HeroText />
          <HeroPic />
        </div>
      </div>
    </section>
  );
};

export default HeroMain;