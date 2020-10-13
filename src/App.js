      import React, { useState } from 'react';
import './style.css';
import Form from './Form';
import CardList from './Cardlist';

export default function App() {
  const [cards, setCards] = useState([]);
  const updateCards = (card) => {
    setCards((prevCards) => {
      return [...prevCards, card];
    });
  };
  return (
    <div>
      <Form updateCards={updateCards} />
      <CardList cards={cards} />
    </div>
  );
}
