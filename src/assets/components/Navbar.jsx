import { useState, useEffect } from "react";
import { FloatingNav } from "../ui/navbar";
import { FaHome, FaInfoCircle, FaServicestack, FaSuitcase, FaEnvelope } from 'react-icons/fa';

export function Navbar() {
  const navItems = [
    { name: "Home", id: "home", icon: <FaHome /> },
    { name: "About", id: "about", icon: <FaInfoCircle /> },
    { name: "Services", id: "services", icon: <FaServicestack /> },
    { name: "Portfolio", id: "portfolio", icon: <FaSuitcase /> },
    { name: "Contact", id: "contact", icon: <FaEnvelope /> },
  ];

  const [activeId, setActiveId] = useState(navItems[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 2;
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < offset) {
            setActiveId(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} activeId={activeId} />
    </div>
  );
}
