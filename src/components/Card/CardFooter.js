import React from 'react';

const CardFooter = (props) => {
  return (
    <footer className="card-footer">
        <button className="card-button card-footer-item">Info</button>
        <a href={props.demoLink} target="_blank" rel="noreferrer" className="card-footer-item">Demo</a>
        <button className="card-button card-footer-item">Code</button>
    </footer>
  )
}

export default CardFooter;