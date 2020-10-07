import React from "react";

const DisplayCard = ({name, image, index}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <tbody>
        <tr key={index}>
          <td>vlastnost1</td>
          <td>vlastnost2</td>
        </tr>
      </tbody>
      <img
        src={image}
        width="140"
        alt={name}
      />
    </div>
  );
};

export default DisplayCard;