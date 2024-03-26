import React from 'react';
import Roadmap from '../components/Roadmap';
import jsonData from '../data/data.json';

const Backend: React.FC = () => {
  return (
    <div>
      <Roadmap type="backend" data={jsonData} />
    </div>
  );
};

export default Backend;
