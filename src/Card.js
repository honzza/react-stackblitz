import React from "react";

const DisplayCard = ({name, image}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img
        src={image}
        width="140"
        alt={name}
      />
    </div>
  );
};

export default DisplayCard;