import React from 'react';
import CardImage from './CardImage';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

const Card = (props) => {
  return (
    <div className="card mx-6 my-5">
        <CardImage />
        <CardContent description={props.description}/>
        <CardFooter />
    </div>
  )
}

export default Card;