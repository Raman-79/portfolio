import React from 'react';
import Roadmap from '../components/Roadmap';
import jsonData from '../data/data.json';

const Blockchain: React.FC = () => {
  return (
    <div>
      <Roadmap type="blockchain" data={jsonData} />
    </div>
  );
};

export default Blockchain;
