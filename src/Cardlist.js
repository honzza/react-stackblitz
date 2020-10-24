import React from 'react';
import DisplayCard from './Card';
import no_image from './no_image.png';
import Grid from '@material-ui/core/Grid';

const CardList = (props) => {
  return (
    <Grid container justify="center" spacing={2}>
      {props.cards.map((card, index) =>
        card.image === '' ? (
          <Grid key={index} item>
            <DisplayCard
              name={card.name}
              attA={card.attA}
              image={no_image}
            />
          </Grid>
        ) : (
          <Grid key={index} item>
            <DisplayCard
              name={card.name}
              attA={card.attA}
              image={card.image}
            />
          </Grid>
        ),
      )}
    </Grid>
  );
};

export default CardList;
