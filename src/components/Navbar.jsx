import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-6">
      <div>
        <h1 className="font-signature ml-3 text-4xl text-white animate-text-focus-in">Priya arya</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105"
          >
            <Link to={link} smooth duration={800}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={toggleMobileMenu}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {isMobileMenuOpen && (
        <ul className="flex flex-col justify-center items-center absolute top-0 w-full left-0 h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
             <Link to={link} smooth duration={800}>{link}</Link>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
