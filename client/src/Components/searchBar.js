import React,{useState} from 'react';

const SearchBar = ({textButton,textToEnter,holder, functionToCall}) => {

	const [inputText, setinputText] = useState('');

	const onSubmit = (event) => {
			event.preventDefault();
			functionToCall(inputText);
	}

	return (

		<div className = "search-bar ui segment">
			<form className = "ui form">
				<div className = "field">
					<label>{textToEnter}</label>
					<input
						id="address"
						type = "text"
						value = {inputText}
						onChange = {(e) => setinputText(e.target.value)}
						placeholder = {holder}
					/>
					<button className = "green ui button" onClick = {onSubmit}> {textButton} </button>
				</div>
			</form>
		</div>
		);


}


export default SearchBar;