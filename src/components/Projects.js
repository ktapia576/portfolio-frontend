import React from 'react';
import Card from './Card/Card';
import JSONData from "../content/projects.json";

const projectsData = JSONData.data;
const projectCards = projectsData.map(project => 
  <Card 
    key={project.name} 
    description={project.description} 
    demoLink={project.demoLink}
  />
); 

const Projects = () => {
  return (
    <div className="container has-background-black-ter py-2">
      {projectCards}
    </div>
  )
}

export default Projects;