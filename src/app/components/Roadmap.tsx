import React from 'react';
import Header from './Header';
interface RoadmapNode {
  name: string;
  link: string;
}

interface RoadmapCategory {
  name: string;
  nodes: RoadmapNode[];
}

interface RoadmapProps {
  type: string;
  data: { roadmaps: { [key: string]: RoadmapCategory } };
}

const Roadmap: React.FC<RoadmapProps> = ({ type, data }) => {
  const roadmapData = data.roadmaps[type];

  if (!roadmapData) return <div>Roadmap data not found</div>;

  return (
    <>
    <Header/>
    <div className='mt-4'>
      <h1>{roadmapData.name} Roadmap</h1>
      <ul>
        {roadmapData.nodes.map((node, index) => (
          <li key={index}>
            <a href={node.link}>{node.name}</a>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Roadmap;
