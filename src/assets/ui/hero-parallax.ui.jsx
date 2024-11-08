import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Cover } from "../ui/cover";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `We have the experience and the expertise to build your Website, Mobile App, Web App, ERP, RFID, IoT, CRM, and Cloud solutions.`;

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, -40]), springConfig);

  return (
    <div
      ref={ref}
      className="h-auto sm:h-[250vh] z-0 dark:bg-black bg-white py-20 sm:py-40 lg:py-60 overflow-hidden antialiased relative flex flex-col self-auto"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </div>
        <div className="flex flex-row mb-10 space-x-10">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </div>
        <div className="flex flex-row-reverse space-x-reverse space-x-10">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full">
      <Cover className="dark:text-white text-black">
        <p className="sm:text-4xl text-2xl font-mono">
          We Art innovative products and services for startups & enterprises
        </p>
      </Cover>
      <p>
        <TextGenerateEffect duration={2} filter={false} words={words} />
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <img
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 dark:bg-black bg-white transition-opacity duration-300" />
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-80 text-gray-900 dark:text-gray-100 transition-opacity duration-300"
      >
        {product.title}
      </h2>
    </motion.div>
  );
};
