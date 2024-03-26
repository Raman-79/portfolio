import React from 'react';

interface RoadmapNodeProps {
  name: string;
  link: string;
}

const RoadmapNode: React.FC<RoadmapNodeProps> = ({ name, link }) => {
  return (
    <li>
      <a href={link}>{name}</a>
    </li>
  );
};

export default RoadmapNode;
