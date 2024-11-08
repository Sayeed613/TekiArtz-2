import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { cn } from "../../lab/utils";

export const FloatingNav = ({ navItems, activeId, className = "" }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 md:space-x-6",
          className
        )}
      >
        {navItems.map((navItem, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className={`relative flex space-x-1 text-neutral-600 dark:text-neutral-50 items-center ${activeId === navItem.id ? 'border-b-2 border-[#0b726f]' : ''} cursor-pointer`}
          >
            <Link
              to={navItem.id}
              smooth={true}
              offset={-50}
              duration={1000}
              aria-label={navItem.name}
              className="flex items-center space-x-1"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm cursor-pointer">{navItem.name}</span>
            </Link>
          </motion.div>
        ))}
         <Link
          to="experience"
          smooth={true}
          offset={-50}
          duration={1000}
        >
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Get Started</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#0b726f] to-transparent h-px" />
        </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
