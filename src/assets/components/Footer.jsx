import logo from "../../../public/images/logo.png";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { TextHoverEffect } from "../ui/text-hover-effect.ui";


export default function Footer() {
  return (
    <div className="relative w-full dark:bg-black dark:text-gray-300 text-gray-700 py-8">
      <div className="container relative z-10 mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 w-[85%]">
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-36" />
          </div>
          <p className="dark:text-gray-400 text-gray-600">
            Software is our Art and our passion. <br />
            At TekiArtz, we create high-quality software to solve business problems.
          </p>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <a href="https://www.facebook.com/tekiartz">
              <CiFacebook className="hover:text-[#0b726f]" />
            </a>
            <a href="https://www.instagram.com/tekiartz">
              <IoLogoInstagram className="hover:text-[#0b726f]" />
            </a>
            <a href="https://www.linkedin.com/company/tekiartz-technologies/">
              <CiLinkedin className="hover:text-[#0b726f]" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <div>
            <h4 className="dark:text-white text-black font-semibold mb-2">Useful Links</h4>
            <ul className="space-y-1">
              <li id="home">
                <a href="#" className="dark:hover:text-[#0b726f] hover:text-gray-700 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li id="about">
                <a href="#" className="dark:hover:text-[#0b726f] hover:text-gray-700 transition-colors duration-200">
                  About us
                </a>
              </li>
              <li id="services">
                <a href="#" className="dark:hover:text-[#0b726f] hover:text-gray-700 transition-colors duration-200">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="dark:text-white text-black font-semibold mb-2">Our Services</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="dark:hover:text-[#0b726f] hover:text-gray-700 transition-colors duration-200">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="dark:hover:text-[#0b726f] hover:text-gray-700 transition-colors duration-200">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="dark:hover:text-[#0b726f] hover:text-gray-700 transition-colors duration-200">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="dark:hover:text-[#0b726f] hover:text-gray-700 transition-colors duration-200">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="dark:hover:text-[#0b726f] hover:text-gray-700 transition-colors duration-200">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="dark:hover:text-[#0b726f] hover:text-gray-700 transition-colors duration-200">
                  Graphic/Logo Design
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-start mt-8 px-20">
        <TextHoverEffect text="TekiArtz" />
        <p className="dark:text-gray-400 text-gray-500 text-sm">
          © copyright <span className="text-[#0b726f]">TekiArtz</span> 2022. All rights reserved.
        </p>
      </div>
    </div>
  );
}
