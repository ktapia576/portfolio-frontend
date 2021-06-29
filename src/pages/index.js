import * as React from 'react';
import '../styles/styles.scss';

const IndexPage = () => {
  return (
    <div className="hero is-fullheight">
      <div className="hero-body is-flex-direction-column is-justify-content-center">
        <h1 className="title"> Hey I'm Kevin Tapia </h1>
        <h4 className="subtitle">Innovative and adaptable Software Developer currently based in Union, New Jersey <br/>
            Check out my projects and contact me to make something great!
        </h4>
        <button className="button">View Projects</button>
      </div>
    </div>
  );
}

export default IndexPage;