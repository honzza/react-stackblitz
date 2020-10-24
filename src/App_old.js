import React, { useState, useEffect } from 'react';
import './style.css';
import Form from './Form';
import CardList from './Cardlist';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "95%",
    margin: "10px",
  },
  paper: {
    padding: theme.spacing(2),
  },
  position: {
    padding: theme.spacing(2),
    position: 'fixed',
    //width: '260px', //pohrát si s tím
  },
}));

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

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {
        <Grid container className={classes.root} spacing={2}>
          {console.log(
            JSON.parse(localStorage.getItem('cardsInLocalStorage')),
          )}
          <Grid item xs={9}>
            <Grid container justify="center" spacing={2}>
              <Paper className={classes.paper}>
                <CardList cards={cards} />
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.position}>
              <Grid container>
                <Grid item>
                  <FormLabel>react card board</FormLabel>
                  <Form updateCards={updateCards} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      }
    </React.Fragment>
  );
}
