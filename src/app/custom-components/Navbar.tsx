'use client'
import React from 'react';
import Link from 'next/link';
import jsonData from '../data/data.json';
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
const Navbar = () => {

  const {name,github,linkedin,resume} = jsonData.personalInfo;
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <div className="text-white font-semibold text-lg cursor-pointer">My Portfolio</div>
          </Link>
        </div>
        <div className="flex space-x-5 justify-center">
          <Link href={github}>
            <div className="text-white cursor-pointer flex items-center"> <FaGithub /> <span className="ml-2">GitHub</span></div>
          </Link>
          <Link href={linkedin}>
            <div className="text-white cursor-pointer flex items-center"><FaLinkedin /> <span className="ml-2">LinkedIn</span></div>
          </Link>
          <Link href={resume}>
            <div className="text-white cursor-pointer flex items-center"> <IoDocument /> <span className="ml-2">Resume</span></div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
