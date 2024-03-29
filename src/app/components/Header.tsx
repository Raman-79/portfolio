'use client'
import Link from 'next/link';
import React,{useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black-800 text-white flex justify-between items-center px-4 py-2 mb-2">
      <div className="flex items-center mb-2 md:mb-0">
      <Link href="/" className='ext-xl font-bold font-sans text-base sm:text-lg lg:text-2xl justify-start'>
        My Portfolio
      </Link>
      </div>
      <ul className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <li className="py-2 md:py-0 text-gray-300 hover:text-white font-sans text-base sm:text-lg lg:text-xl">
          <Link href="https://github.com/Raman-79">
            Github
          </Link>
        </li>
        <li className="py-2 md:py-0 text-gray-300 hover:text-white font-sans text-base sm:text-lg lg:text-xl ml-10">
          <Link href="https://www.linkedin.com/in/raman79/">
            LinkedIn
          </Link>
        </li>
        <li className="py-2 md:py-0 text-gray-300 hover:text-white font-sans text-base sm:text-lg lg:text-xl ml-10">
          <Link href="/Raman_Resume.pdf" legacyBehavior>
          <a target="_blank">Resume</a>
          </Link>
        </li>
        {/* Add more navigation links here */}
      </ul>

      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
        {/* <FontAwesomeIcon icon={faBars} className="text-white text-2xl" /> */}
      </button>
    </nav>
  );
};

export default Header;
