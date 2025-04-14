const AboutMeImage = () => {
  return (
    <div className="relative h-[500px] w-[300px] rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 transform scale-105 transition-all duration-500 ease-in-out hover:scale-110">
        <img
          /*src="../../public/images/about-me.jpg"*/
          src="/images/about-me.jpg"
          alt="About Me Image"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute bottom-[-40px] left-[-40px] h-[500px] w-[250px] bg-gradient-to-br from-yellow-400 to-orange-500 rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] shadow-lg"></div>
    </div>
  );
};

export default AboutMeImage;
