import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const gradients = [
  {
    color: "shadow-cyanMediumShadow",
    animation: "animate-pulse",
    scale: 1,
  },
  {
    color: "shadow-orangeMediumShadow",
    animation: "opacity-50",
    scale: 1.2,
  },
  {
    color: "shadow-cyanMediumShadow",
    animation: "opacity-70",
    scale: 0.9,
  },
];

const HeroGradient = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickEffect, setClickEffect] = useState(false);

  const { scrollY } = useScroll();
  const scrollOffset = useTransform(scrollY, [0, 500], [0, 60]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPosition({ x, y });
    };

    const handleTilt = (e) => {
      const x = e.gamma / 45;
      const y = e.beta / 45;
      setPosition({ x, y });
    };

    const handleClick = (e) => {
      setClickEffect(true);
      setTimeout(() => setClickEffect(false), 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("deviceorientation", handleTilt);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleTilt);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleClick);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {gradients.map((item, index) => {
        const offsetX = position.x * (70 + index * 30);
        const offsetY = position.y * (70 + index * 25);

        return (
          <motion.div
            key={index}
            className={`absolute ${item.color} ${item.animation}`}
            style={{
              top: `calc(50% + ${offsetY}px)`,
              left: `calc(50% + ${offsetX}px)`,
              width: clickEffect
                ? `${340 * item.scale}px`
                : `${300 * item.scale}px`,
              height: clickEffect
                ? `${340 * item.scale}px`
                : `${300 * item.scale}px`,
              borderRadius: "9999px",
              filter: "blur(120px)",
              opacity: 0.35,
              translateY: scrollOffset,
            }}
            animate={{ scale: clickEffect ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 14 }}
          />
        );
      })}
    </div>
  );
};

export default HeroGradient;
