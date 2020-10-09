import React, {useState} from 'react';

export default function Form(props) {
	const [name, setName] = useState('')
  const [image, setImage] = useState('')
	const onFormSubmit = (event) => {
    event.preventDefault()
    props.handleSubmit({name: name, image: image});
    setName('')
    setImage('')
  }
  return (
		<form onSubmit={onFormSubmit}>
			<div className="form">
				<h2 align='center'>react card board</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Insert name"
          autoComplete="off"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="Insert image link"
          autoComplete="off"
          value={image}
          onChange={event => setImage(event.target.value)}
        />
				<button type="submit">Add</button>
			</div>
		</form>
	)
}