import { motion } from "framer-motion";

export function AnimatedHeading({ title, description }) {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const text = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col overflow-hidden bg-white dark:bg-black h-auto leading-loose pt-10"
      id="services"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="p-3">
        <motion.div className="max-w-6xl mx-auto" variants={text}>
          <motion.h1
            className="text-lg text-start md:text-4xl mb-4 text-[#0b726f] max-w-4xl"
            variants={text}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-neutral-700 text-start dark:text-neutral-300 text-sm md:text-base max-w-sm"
            variants={text}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
