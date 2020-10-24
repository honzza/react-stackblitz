import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Root, Header, Nav, Content, Footer } from './Layout';
import CardList from './Cardlist';
import Form from './Form';
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';

const config = {
  navAnchor: 'left',
  navVariant: {
    xs: 'temporary',
    sm: 'persistent',
    md: 'persistent',
  },
  navWidth: {
    xs: 246,
    sm: 246,
    md: 246,
  },
  collapsible: {
    xs: false,
    sm: false,
    md: false,
  },
  collapsedWidth: {
    xs: 64,
    sm: 64,
    md: 64,
  },
  clipped: {
    xs: false,
    sm: false,
    md: false,
  },
  headerPosition: {
    xs: 'relative',
    sm: 'relative',
    md: 'relative',
  },
  squeezed: {
    xs: true,
    sm: true,
    md: true,
  },
  footerShrink: {
    xs: true,
    sm: true,
    md: true,
  },
};

export default function App() {
  const useStateWithLocalStorage = (localStorageKey) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(localStorageKey)) || [],
    );
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [value]); // eslint-disable-line
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
    <Root
      config={config}
      style={{ minHeight: '100vh', width: '98.4%' }}
    >
      <CssBaseline />
      <Header
        menuIcon={{
          inactive: <MenuIcon />,
          active: <ChevronLeftIcon />,
        }}
      >
        <Typography variant="h4">react card board</Typography>
      </Header>
      <Nav
        collapsedIcon={{
          inactive: <ChevronLeftIcon />,
          active: <ChevronRightIcon />,
        }}
        header={
          // you can provide fixed header inside nav
          // change null to some react element
          (ctx) => null
        }
      >
        <Typography variant="h6" align="center">
          add new item
        </Typography>
        <Form updateCards={updateCards} />
      </Nav>
      <Content>{<CardList cards={cards} />}</Content>
      <Footer>
        <Typography>honzza dvorak 2020</Typography>
      </Footer>
    </Root>
  );
}
