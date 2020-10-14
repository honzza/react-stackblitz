import React, { useState, useEffect } from 'react';
import './style.css';
import Form from './Form';
import CardList from './Cardlist';

export default function App() {
  const useStateWithLocalStorage = (localStorageKey) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(localStorageKey)) || [],
    );
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [value]);
    return [value, setValue];
  };

  const [cards, setCards] = useStateWithLocalStorage(
    'cardsInLocalStorage',
  );

  const updateCards = (card) => {
    setCards((prevCards) => {
      return [...prevCards, card];
    });
  };

  return (
    <div>
      {console.log(
        JSON.parse(localStorage.getItem('cardsInLocalStorage')),
      )}
      <Form updateCards={updateCards} />
      <CardList cards={cards} />
    </div>
  );
}
