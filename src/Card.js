import React from "react";

const DisplayCard = ({name, image}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <span>vlastnost1</span>
      <span>vlastnost2</span>
      <img
        src={image}
        width="140"
        alt={name}
      />
    </div>
  );
};

export default DisplayCard;