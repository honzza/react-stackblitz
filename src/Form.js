import React, {useState} from 'react';

export default function Form() {
	const [title, setTitle] = useState('')
	const onFormSubmit = () => {
    console.log("Pokus o odeslání formuláře: ", title)
    // handleSubmit({title});
    // this.setState(this.initialState);
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
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
				<button type="submit">Add</button>
			</div>
		</form>
	)
}