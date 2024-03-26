'use client'
import Link from 'next/link';
import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white flex justify-between items-center px-4 py-2 mb-2">
      <Link href="/" className='ext-xl font-bold'>
        My App
      </Link>

      <ul className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <li className="py-2 md:py-0 text-gray-300 hover:text-white">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="py-2 md:py-0 text-gray-300 hover:text-white">
          <Link href="/about">
            About
          </Link>
        </li>
        {/* Add more navigation links here */}
      </ul>

      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
        <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
      </button>
    </nav>
  );
};

export default Header;
