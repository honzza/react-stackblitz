import React, {useState} from "react";
import "./style.css";
import Form from "./Form";
import CardList from "./Cardlist";

export default function App() {

  const [cards, SetCards] = useState([
      {name: 'AM370', image: 'https://bit.ly/3jyp2nB'},
      {name: 'AM365', image: 'https://bit.ly/33wffJd'}
  ])

  return (
    <div>
      <Form />
      <CardList cards={cards}/>
    </div>
  );
}