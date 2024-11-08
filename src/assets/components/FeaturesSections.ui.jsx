import { cn } from "../../lab/utils";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaRegSmile, FaDollarSign } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { MdOutlineTimer } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);

    if (!isLargeScreen) {
      const interval = setInterval(() => {
        setHoverIndex((prevIndex) => (prevIndex + 1) % features.length);
      }, 2000);
      return () => clearInterval(interval);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [isLargeScreen]);

  const features = [
    {
      title: "Effective Collaboration",
      description: "Clear, consistent communication for seamless project success.",
      icon: <MdOutlinePeopleAlt />,
    },
    {
      title: "Great Place to Work",
      description: "A growth-focused environment with a supportive, calm culture.",
      icon: <FaRegSmile />,
    },
    {
      title: "Unbeatable Pricing",
      description: "Best market prices. No hidden fees or commitments.",
      icon: <FaDollarSign />,
    },
    {
      title: "Client-Centric",
      description: "Tailored strategies that solve key challenges for business growth.",
      icon: <BiTargetLock />,
    },
    {
      title: "Multi-Tenant Access",
      description: "Share passwords without buying extra seats.",
      icon: <AiOutlineShareAlt />,
    },
    {
      title: "Results-Driven",
      description: "Expert professionals focused on delivering impactful outcomes.",
      icon: <FiTrendingUp />,
    },
    {
      title: "Timely Quality",
      description: "Top-tier solutions delivered on time with excellent functionality.",
      icon: <MdOutlineTimer />,
    },
    {
      title: "Sincerity in Everything",
      description: "We deliver with integrity and high-quality results.",
      icon: <BsFillHeartFill />,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto mt-10">
      {features.map((feature, index) => (
        <Feature
          key={feature.title}
          {...feature}
          index={index}
          isHovered={hoverIndex === index}
          onHover={() => isLargeScreen && setHoverIndex(index)}
          onLeave={() => isLargeScreen && setHoverIndex(null)}
        />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index, isHovered, onHover, onLeave }) => {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 cursor-pointer",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
      initial={{ opacity: 0.5, scale: 1 }}
      animate={{
        opacity: isHovered ? 1 : 0.5,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0 h-full w-full pointer-events-none transition duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 1 }}
        style={{
          background: "linear-gradient(to top, #f0f0f0, transparent)",
        }}
      />

      <motion.div
        className={`mb-4 relative z-10 px-10 text-neutral-400`}
        animate={{
          color: isHovered ? "#3b82f6" : "#9ca3af",
        }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <motion.div
          className="absolute left-0 inset-y-0 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700"
          animate={{
            height: isHovered ? "2rem" : "1.5rem",
            backgroundColor: isHovered ? "#3b82f6" : "#9ca3af",
          }}
          transition={{ duration: 0.5 }}
        />
        <span
          className="transition duration-200 inline-block"
          style={{
            color: isHovered ? "#3b82f6" : "#111827",
          }}
        >
          {title}
        </span>
      </div>

      <motion.p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10"
        animate={{ opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
