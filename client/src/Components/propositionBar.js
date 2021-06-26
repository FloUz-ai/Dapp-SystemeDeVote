import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PropositionBar = ({submitProposal}) => {

	const [inputMade, setInputMade] = useState('');

	const onSubmit = (event) => {
			event.preventDefault();
			submitProposal (inputMade);
			
	}

	return (

		<div className = "search-bar ui segment">
				<form className = "ui form">
					<div className = "field">
						<label>Enter a new proposal</label>
						<input
							type = "text"
							value = {inputMade}
							onChange = {(e) => setInputMade(e.target.value)}
							pattern = "0x"
						/>
					<button className = "green ui button" onClick = {onSubmit} > submit </button>
				</div>
			</form>
		</div>
		);
}

export default PropositionBar;