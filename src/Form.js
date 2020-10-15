import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    props.updateCards(data);
    e.target.reset();
  };

  return (
    <div className="form-container">
      <h3>react card board</h3>
      <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="insert name"
          autoComplete="off"
          ref={register({ required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <label htmlFor="attA">attributeA</label>
        <input
          type="text"
          id="attA"
          name="attA"
          placeholder="insert attribute"
          autoComplete="off"
          ref={register}
        />
        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="insert image link"
          autoComplete="off"
          ref={register}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}
//umístění hlášky
