import { Navbar } from "./assets/components/Navbar";
import { Hero } from "./assets/pages/Hero";
import About from "./assets/pages/About";
import Service from "./assets/pages/Service";
import { ThemeToggleButton } from "./assets/components/ThemeToggleButton";
import Portfolio from "./assets/pages/Portfolio";
import Contact from "./assets/pages/Contact";
import Footer from "./assets/components/Footer";

export default function App() {
  return (
    <div className="dark:bg-black bg-white">
      <Navbar />
      <Hero />
      <About />
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <ThemeToggleButton />
    </div>
  );
}
