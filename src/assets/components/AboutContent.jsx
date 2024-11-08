import { useState } from "react";
import { BackgroundBeams } from "../ui/backgroundBeams";
import { Lens } from "../ui/lens";

export function AboutContent() {
  const [hovering, setHovering] = useState(false);
  return (
    <>
      <div
        className="z-10 relative flex items-center justify-center h-auto w-full bg-white dark:bg-neutral-950 antialiased overflow-hidden transition-colors duration-300"
        id="about"
      >
        <BackgroundBeams className="absolute inset-0 z-0" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto p-6 gap-8 z-10">
          <div className="col-span-1 md:col-span-2 text-start mb-6 p-2">
            <h1
              className="text-2xl md:text-4xl mb-4 text-[#0b726f] max-w-full leading-tight"

            >
              Who We Are
            </h1>

            <p
              className="text-neutral-700 text-start dark:text-neutral-300 text-base sm:text-lg  mb-10 max-w-md"

            >
              Software is our Art and our Passion. At TekiArtz, we create high-quality software to solve business problems.
            </p>
          </div>

          <Lens hovering={hovering} setHovering={setHovering}>
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About us background"
            />
          </Lens>

          <div className="flex flex-col justify-center">
            <p className="text-black dark:text-white my-4 text-base sm:text-lg leading-relaxed transition-colors duration-300">
              TekiArtz was founded in 2021 in KGF, just 100 km from Bangalore. We are an energetic team of software engineers whose impact far exceeds our size. Our team collaborates with passionate innovators, from startups to enterprises, helping them bring their product ideas to life.
            </p>

            <p className="text-black dark:text-white my-4 text-base sm:text-lg leading-relaxed transition-colors duration-300">
              At TekiArtz, we care deeply about your vision, mission, and goals. From reviewing your requirements to delivering an estimate, we’ll build each feature based on your feedback. Our goal is to support your success with our technical and business expertise.
            </p>

            <p className="text-black dark:text-white my-4 text-base sm:text-lg leading-relaxed transition-colors duration-300">
              We leverage cutting-edge tech like ReactJS, HTML/CSS, Python, React Native, MongoDB, MySQL, Java, and other current trends.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
