import React from 'react';

const DisplayCard = ({ name, image, attA }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{attA}</p>
      <img src={image} width="140" alt={name} />
    </div>
  );
};

export default DisplayCard;
