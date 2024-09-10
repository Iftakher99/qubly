import { useState } from 'react';

import logo from './img/Logo.png';
import Button from './Button';

import { BiChevronDown } from 'react-icons/bi';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" mx-auto px-4">
      <nav className=" px-4 py-5 md:px-8 lg:px-14 flex items-center justify-between">
        {/* Logo */}

        <a href="/" className="text-2xl font-bold">
          <img src={logo} alt="Logo" />
        </a>
        {/* Dropdown Menu for mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Links for desktop and dropdown */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center w-full lg:w-auto`}
        >
          <ul className="lg:flex lg:space-x-8">
            <li className="flex  items-center">
              <a
                href="#"
                className="block lg:inline-block text-gray-600 hover:text-gray-900 py-2"
              >
                About
              </a>
              <span>
                <BiChevronDown />
              </span>
            </li>
            <li>
              <a
                href="#"
                className="block lg:inline-block text-gray-600 hover:text-gray-900 py-2"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block lg:inline-block text-gray-600 hover:text-gray-900 py-2"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block lg:inline-block text-gray-600 hover:text-gray-900 py-2"
              >
                Login
              </a>
            </li>
          </ul>
          <a href="#" className=" mt-4 lg:mt-0 lg:ml-4 px-4 py-2">
            <Button> Start free trail</Button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
