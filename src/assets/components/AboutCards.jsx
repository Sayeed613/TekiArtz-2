import { motion } from "framer-motion";

export const AboutCards = () => {
  const data = [
    {
      title: "Step 1: Contact Us",
      description: "Share your project details.",
    },
    {
      title: "Step 2: Discuss",
      description: "Talk terms and timelines.",
    },
    {
      title: "Step 3: Get Started",
      description: "We begin work immediately.",
    },
    {
      title: "Step 4: Delivered",
      description: "Receive and grow your business.",
    },
    {
      title: "Bonus: Free Maintenance",
      description: "3 months of support included.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="w-full bg-white dark:bg-black transition-colors duration-300"
      id="experience"
    >
      <section className="py-12 px-4 bg-gradient-to-b from-white via-gray-200 to-purple-200 dark:from-black dark:via-gray-900 dark:to-purple-900 text-start shadow-xl transition-colors duration-300 p-2">
        <h1 className="text-lg text-start md:text-4xl mb-4 text-[#0b726f]  max-w-6xl mx-auto">
          Experience With Us
        </h1>

        <p className="text-neutral-700 text-start dark:text-neutral-300 text-sm md:text-base  max-w-6xl mx-auto">
          Let us help you grow your business with our step-by-step process.
        </p>

        <motion.div
          className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[100px]  max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {data.slice(0, 4).map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-black bg-opacity-70 dark:bg-opacity-70 p-6 rounded-lg shadow-lg hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-all"
              variants={item}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-md font-bold text-black dark:text-white mb-2">
                {stat.title}
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center">
            <motion.div
              className="bg-gray-100 dark:bg-black bg-opacity-70 dark:bg-opacity-70 p-6 rounded-lg shadow-lg hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-all"
              variants={item}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-md font-bold text-black dark:text-white mb-2">
                {data[4].title}
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {data[4].description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
