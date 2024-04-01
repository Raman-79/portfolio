import React from 'react';
import NodeComponent from '../custom-components/NodeComponent';
import jsonData from '../data/data.json';
import ConnectionComponent from '../custom-components/ConnectionComponent';

const reactRoadmap = jsonData.roadmaps.frontend.technologies.reactjs; // Accessing the React.js roadmap
const steps = reactRoadmap.steps; // Accessing the steps for React.js

const Frontend: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <NodeComponent name={step.title} link={step.description} />
          {index < steps.length - 1 && <ConnectionComponent />} {/* Rendering connections between steps */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Frontend;
