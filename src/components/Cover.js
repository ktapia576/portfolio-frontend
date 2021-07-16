import React from 'react';
import { Link } from 'gatsby';

const Cover = () => {
  return (
    <div className="hero has-background-black-ter is-fullheight-with-navbar">
        <div className="hero-body has-text-centered is-flex-direction-column is-justify-content-center">
          <h1 className="title has-text-grey-lighter"> Hello, my name is Kevin Tapia. </h1>
          <h4 className=" has-text-grey mb-5"> 
            Innovative and adaptable Software Developer currently based in Union, New Jersey. <br/>
            Check out my projects and contact me to make something great!
          </h4>
          <Link to="/projects" className="button is-light is-outlined">View Projects</Link>
        </div>
    </div>
  )
}

export default Cover;