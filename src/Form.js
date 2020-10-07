import React, {useState} from 'react';

export default function Form() {
	const [title, setTitle] = useState('')
	return (
		<form onSubmit={}>
			<div className="form">
				<h2 align='center'>electrometer board</h2>
        <label for="title">Title</label>
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

    //onFormSubmit = (event) => {
      //  event.preventDefault();
        //this.props.handleSubmit(this.state);
       // this.setState(this.initialState);
    //}