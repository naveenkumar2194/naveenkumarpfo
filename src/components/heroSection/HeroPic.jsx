import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      className="relative flex items-center justify-center h-full w-full"
    >
      {/* 3D Animated Hexagon */}
      <motion.div
        style={{
          rotateZ: rotate,
          scale: scale,
        }}
        className="absolute z-0 flex items-center justify-center w-full h-full"
      >
        <PiHexagonThin className="text-cyan opacity-30 blur-sm w-[90%] h-[90%] max-w-[600px] max-h-[600px]" />
      </motion.div>

      {/* Static Back Layer */}
      <div className="absolute z-0 flex items-center justify-center w-full h-full">
        <PiHexagonThin className="text-cyan opacity-10 w-[70%] h-[70%] max-w-[500px] max-h-[500px]" />
      </div>

      {/* Image */}
      <motion.img
        /*src="../../public/images/mypic.png"*/
        src="/images/mypic.png"
        alt="NaveenKumar"
        style={{ scale }}
        className="relative z-10 max-h-[450px] w-auto rounded-xl shadow-cyanShadow"
      />
    </motion.div>
  );
};

export default HeroPic;
