import React, { useState } from 'react';

export default function Form(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit({ name: name, image: image });
    setName('');
    setImage('');
  };
  return (
    <div className="form-container">
      <h3>react card board</h3>
      <form className="form-inline" onSubmit={onFormSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="insert name"
          autoComplete="off"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="insert image link"
          autoComplete="off"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}
