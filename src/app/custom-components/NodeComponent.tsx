import React from 'react';

interface Node {
  name: string;
  link: string;
}

const NodeComponent: React.FC<Node> = ({ name, link }) => {
  return (
    <div className="flex flex-col items-center p-4 ">
{/* <div className="w-6 h-6 mb-4">
        <div className={`w-6 h-6 border-b-2 border-l-2 border-gray-300 transform rotate-${360}`}></div>
      </div> */}
      <a href={link} className="text-white">
        <div className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">{name}</div>
      </a>
    </div>
  );
};

export default NodeComponent;
