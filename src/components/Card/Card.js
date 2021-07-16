import React from 'react';
import CardImage from './CardImage';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

const Card = () => {
  return (
    <div className="card">
        <CardImage />
        <CardContent />
        <CardFooter />
    </div>
  )
}

export default Card;