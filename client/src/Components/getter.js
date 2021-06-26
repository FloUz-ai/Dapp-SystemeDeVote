import React from 'react';


const Getter = ({valueToSet, textToEnter, checkWinner,voteToSet}) => {
	

	return (
			<div>
				<div className = "ui labeled button">
					<div className = "blue ui button" onClick = {checkWinner}>
						{textToEnter}
					</div>
					<div className="ui basic label">
				    	Winner: {valueToSet} <br/>
				  		Votes: {voteToSet} 
				  	</div>
				</div>
			</div>
		)
}

export default Getter;