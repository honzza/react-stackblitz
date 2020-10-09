import React, {useState} from "react";
import "./style.css";
import Form from "./Form";
import CardList from "./Cardlist";

export default function App() {

  const [cards, setCards] = useState([
      {name: 'AM370', image: 'https://bit.ly/3jyp2nB'},
      {name: 'AM365', image: 'https://bit.ly/33wffJd'}
  ])

  const handleSubmit = card => {
    setCards(prevCards => {return [...prevCards, card]})
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit}/>
      <CardList cards={cards}/>
    </div>
  );
}