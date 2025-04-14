import { PiHexagonThin } from "react-icons/pi";

const hexagonLayers = [
  {
    color: "text-orange",
    opacity: "opacity-70",
    extra: "", // Clear layer
    animation: "animate-rotate3d",
  },
  {
    color: "text-orange",
    opacity: "opacity-70",
    extra: "blur-lg",
    animation: "animate-rotate3d-reverse",
  },
  {
    color: "text-cyan",
    opacity: "opacity-70",
    extra: "", // Clear layer
    animation: "animate-rotate3d",
  },
  {
    color: "text-cyan",
    opacity: "opacity-70",
    extra: "blur-lg",
    animation: "animate-rotate3d-reverse",
  },
];

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center h-full w-full perspective-[1200px]">
      <div className="relative h-full w-full">
        <img
          /*src="../../public/images/me.png"*/
          src="/images/me.png"
          alt="NaveenKumar"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-auto h-auto md:max-w-[570px] sm:max-w-[380px]"
        />
        {hexagonLayers.map((layer, index) => (
          <div
            key={index}
            className="absolute bottom-[-20%] w-full h-full -z-10 flex items-center justify-center"
          >
            <PiHexagonThin
              className={`md:h-[90%] sm:h-[120%] min-h-[600px] w-auto ${layer.color} ${layer.opacity} ${layer.extra} ${layer.animation}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroImage;
