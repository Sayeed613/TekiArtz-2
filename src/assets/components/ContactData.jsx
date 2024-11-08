import { motion } from "framer-motion";
import ContactCards from "./ContactCards";
import { ShootingStars } from "../ui/shooting-stars.ui";
import { StarsBackground } from "../ui/stars-background.ui";

export function ContactData() {
  const data = [
    {
      id: 1,
      title: "Address",
      Content: (
        <div>
          1st Cross Balakrishna Layout, Mini Ibrahim Road, Robertsonpet KGF (100
          Km from Bangalore) Karnataka, India - 563122
        </div>
      ),
    },
    {
      id: 2,
      title: "Call Us",
      Content: (
        <div>
          <p>+91 8904458815</p>
          <p>+91 9019864221</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Email Us",
      Content: (
        <div>
          <p>writemail2nawaz@gmail.com</p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Open Hours",
      Content: (
        <div>
          <p>Monday - Friday</p>
          <p>9:00AM - 05:00PM</p>
        </div>
      ),
    },
  ];

  return (
    <div
      className="relative h-auto dark:bg-black overflow-hidden"
      id="contact"
    >
      <div className="relative z-10 p-4 max-w-6xl mx-auto">
      <h1
          className="text-lg text-start md:text-4xl mb-4 text-[#0b726f]"

        >
          Contact Us
        </h1>

        <p
          className="text-neutral-700 text-start dark:text-neutral-300 text-sm md:text-base max-w-6xl mb-10"

        >

          Get in touch today.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-2/3">
            {data.map(({ id, title, Content }) => (
              <motion.div
                key={id}
                className="flex items-stretch border-gray-300 dark:border-gray-700 rounded-lg p-4 transform transition-all duration-300 "
                style={{ minHeight: "18rem", minWidth: "16rem" }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <ContactCards title={title} Content={Content} />
              </motion.div>
            ))}
          </div>

          <div className="border-2 dark:border-gray-700 border-gray-300 rounded-lg overflow-hidden h-[37rem] w-full md:w-[40%] hover:transform transition-all duration-500 ">
            <figure className="h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31103.940740179627!2d78.2511635!3d12.9723254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badeb6bb0a37799%3A0x81f74c91ed470d8f!2sTekiArtz%20Technologies!5e0!3m2!1sen!2sin!4v1730459590856!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(100%) invert(100%)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map showing the location of TekiArtz Technologies"
              ></iframe>
            </figure>
          </div>
        </div>
      </div>

      <hr className="text-green-950 w-[80%] m-auto mt-10" />

      <ShootingStars />

      <StarsBackground />
    </div>
  );
}
