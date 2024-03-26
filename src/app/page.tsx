import React from 'react';
import Link from 'next/link';
import jsonData from './data/data.json';
import Header from './components/Header';
const {name} = jsonData.personalInfo;
const Home: React.FC = () => {
  return (
    <div className='mt-10'>
      <Header/>
      <h1>{name}</h1>
      <div>
        <Link href="/frontend">Frontend Roadmap</Link>
      </div>
      <div>
        <Link href="/backend">Backend Roadmap</Link>
      </div>
      <div>
        <Link href="/blockchain">Blockchain Roadmap</Link>
      </div>
    </div>
  );
};

export default Home;
