import React from 'react';
import DisplayCard from './Card';
import no_image from './no_image.png';

const CardList = (props) => {
  return (
    <div className="card-container">
      {props.cards.map((card, index) =>
        card.image === '' ? (
          <DisplayCard
            name={card.name}
            attA={card.attA}
            image={no_image}
            key={index}
          />
        ) : (
          <DisplayCard
            name={card.name}
            attA={card.attA}
            image={card.image}
            key={index}
          />
        ),
      )}
    </div>
  );
};

export default CardList;
