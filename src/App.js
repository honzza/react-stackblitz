import React, {useState} from "react";
import "./style.css";
import Form from "./Form";
import CardList from "./Cardlist";

export default function App() {

  const [cards, setCards] = useState([])

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