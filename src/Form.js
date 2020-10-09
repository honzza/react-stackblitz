import React, {useState} from 'react';

export default function Form(props) {
	const [title, setTitle] = useState('')
	const onFormSubmit = (event) => {
    event.preventDefault()
    props.handleSubmit({name: title, image:'https://bit.ly/33wffJd'});
    setTitle('')
  }
  return (
		<form onSubmit={onFormSubmit}>
			<div className="form">
				<h2 align='center'>electrometer board</h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Insert title"
          autoComplete="off"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
				<button type="submit">Add</button>
			</div>
		</form>
	)
}