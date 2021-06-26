import React from 'react';
import Whitelist from "./whitelist";


const OwnerSection = ({startProposal, endProposal, startVoting, endVoting, endContract, currentState,whitelist}) => {


return (

	<React.Fragment>
		<div>
			<div className = "ui three column doubling stackable grid container">
				<div className = "row"> 
                	<Whitelist whitelist = {whitelist} />
              	</div>
				<div className = "column">
					<div style = {{textAlign:'center'}}>Proposal Session</div> 
						<div>
							<button className = "ui positive button" onClick = {() => {startProposal()}}>Start</button>
							<button className = "ui negative button" onClick = {() => {endProposal()}}>Finish</button>
						</div>
				</div>
				<div className = "column">
					<label style = {{textAlign:'center'}}>Voting session 
						<div>
							<button className = "ui positive button" onClick = {() => {startVoting()}}>Start</button>
							<button className = "ui negative button" onClick = {() => {endVoting()}}>Finish</button>
						</div>
					</label>
				</div>
				<div className = "column">
					<label style = {{textAlign:'center'}}>Counting votes 
						<div>
							<button className = " blue ui button" onClick = {() => {endContract()} }>Start</button>
						</div>
					</label>
				</div>
			</div>
		</div>
	</React.Fragment>
	);


}

export default OwnerSection;