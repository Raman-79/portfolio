import React from 'react';
import Link from 'next/link';
import jsonData from '../app/data/data.json';

const name = jsonData.personalInfo.name;

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-[89.5vh] flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Hi! I'm {name} <span className="inline-block">👨‍💻</span> 
      </h1>
      <p className="text-xl md:text-2xl text-center mb-8">
       A versatile full-stack web and app developer, proficient in the latest cutting-edge technologies. 💻😉
      </p>
      <div className="text-xl md:text-2xl text-center mb-8">
        Checkout <span className="inline-block">👇</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/frontend">
          <div className="block bg-blue-500 text-center p-4 rounded-lg cursor-pointer transform hover:scale-110 transition duration-300">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Frontend</h2>
          </div>
        </Link>
        <Link href="/backend">
          <div className="block bg-green-500 text-center p-4 rounded-lg cursor-pointer transform hover:scale-110 transition duration-300">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Backend</h2>
          </div>
        </Link>
        <Link href="/blockchain">
          <div className="block bg-yellow-500 text-center p-4 rounded-lg cursor-pointer transform hover:scale-110 transition duration-300">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Blockchain</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
