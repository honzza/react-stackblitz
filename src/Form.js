import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
    width: '224.6px'
  },
}));

export default function Form(props) {
  const { handleSubmit, register, errors } = useForm({
    mode: 'onChange',
  });
  const classes = useStyles();
  const onSubmit = (data, e) => {
    props.updateCards(data);
    e.target.reset();
  };

  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          className={classes.root}
          id="name"
          label="Name"
          name="name"
          variant="outlined"
          size="small"
          inputRef={register({ required: true })}
          error={!!errors.name}
          helperText={errors.name && 'Name is required'}
        />
        <TextField
          className={classes.root}
          id="attA"
          label="AttributeA"
          name="attA"
          variant="outlined"
          size="small"
          inputRef={register}
        />
        <TextField
          className={classes.root}
          id="image"
          label="Image link"
          name="image"
          variant="outlined"
          size="small"
          inputRef={register}
        />
        <Button
          variant="outlined"
          size="medium"
          type="submit"
          className={classes.button}
        >
          add
        </Button>
      </form>
    </div>
  );
}
