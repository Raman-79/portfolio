import React from 'react';
import Roadmap from '../components/Roadmap';
import jsonData from '../data/data.json';

const Frontend: React.FC = () => {
  return (
    <div>
      <Roadmap type="frontend" data={jsonData} />
    </div>
  );
};

export default Frontend;
