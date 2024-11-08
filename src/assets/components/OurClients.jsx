import { motion } from "framer-motion";

export default function OurClients() {
    const stats = [
        "Tulasi by MP Enterprise",
        "Shifa Piles Clinic",
        "FeBIT Infra Solutions",
      ];
  return (
    <div className="infinite-scroll-container  dark:bg-black  bg-white h-auto">
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-lg text-start md:text-4xl mb-4 text-[#0b726f]  max-w-4xl">
          Our Clients
        </h1>

        <p className="text-neutral-700 text-start dark:text-neutral-300 text-sm md:text-base max-w-sm ">
          Just A Few Of Our Esteemed Clients
        </p>
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="infinite-scroll-content inline-flex space-x-6 md:space-x-12"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {stats.concat(stats).map((stat, index) => (
            <div
              className="stat text-6xl  font-semibold text-gray-700 dark:text-gray-600"
              key={index}
            >
              {stat}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
