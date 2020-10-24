import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 220,
    backgroundColor: '#999',
    color: '#fff',
  },
  media: {
    height: 0,
    paddingTop: '138%',
  },
  subheader: {
    color: '#fff',
  },
}));

const DisplayCard = ({ name, image, attA }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        classes={{
          subheader: classes.subheader,
        }}
        title={name}
        subheader="podtitul zde"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Audrey"
        alt={name}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {attA}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DisplayCard;
