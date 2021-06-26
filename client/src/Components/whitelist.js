import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Whitelist = ({whitelist}) => {

	const [inputAddress, setinputAddress] = useState('');

	const onSubmit = (event) => {
			
			whitelist(inputAddress);
			event.preventDefault();
	}

	return (

		<div className = "search-bar ui segment">
				<form className = "ui form">
					<div className = "field">
						<label>Address to whitelist</label>
						<input
							id="address"
							type = "text"
							value = {inputAddress}
							onChange = {(e) => setinputAddress(e.target.value)}
							placeholder = "Enter an Ethereum adress 0x..."
						/>
					<button className = " green ui button" onClick = {onSubmit} > Enter in Whitelist </button>
				</div>
			</form>
		</div>
		);
}

export default Whitelist;
