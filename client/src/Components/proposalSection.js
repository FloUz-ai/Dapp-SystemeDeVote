import React from 'react';
import PropositionBar from "./propositionBar";


const ProposalSection = ({proposalTab, submitProposal}) => {

	const tabRender = proposalTab.map( (Tab, index) => {

		return(
			<tr key={Tab}>
				<td> {Tab} </td>
				<td>{index}</td>
			</tr>
			)
		})

return (
	<React.Fragment>
		<div>
			<div>
			 <PropositionBar 
			 submitProposal = {submitProposal}
			  />
			</div>
				<table className = "ui celled table">
					<thead>
						<tr><th>Proposal</th>
						<th>ID</th>
					</tr></thead>
						<tbody>
						{tabRender}
						</tbody>
				</table>
		</div>
		
	</React.Fragment>
	)
}

export default ProposalSection;