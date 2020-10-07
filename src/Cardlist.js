import React from 'react';
import DisplayCard from "./Card";

const CardList = (props) => {
    return (
        <div className="cardcontainer">
            {props.cards.map((card, index) => (
                <DisplayCard name={card.name} image={card.image} index={index}/>
            ))}
        </div>
    )
}

export default CardList;