import React from 'react';
import DisplayCard from './Card';

const CardList = (props) => {
  return (
    <div className="card-container">
      {props.cards.map((card, index) => (
        <DisplayCard
          name={card.name}
          image={card.image}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardList;