import React from 'react';
import Card from './Card/Card';
import JSONData from "../content/projects.json";

const projectsData = JSONData.data;
const projectCards = projectsData.map(project => 
  <Card description={project.description} />
); 


const Projects = () => {
  return (
    <div className="container has-background-black-ter is-full-height pt-3">
      {projectCards}
    </div>
  )
}

export default Projects;