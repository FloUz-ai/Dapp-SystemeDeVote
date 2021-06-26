import React from 'react';
import SearchBar from './searchBar';
import Getter from "./getter";


const VotersSection = ({currentState, submitVote, voteVoter,proposalTab,winner,checkVote, checkWinner}) => {

const textButton1 = "Submit Vote";
const textToEnter1 = "Vote";
const holder1 = "Enter a proposal Id"
const textButton2 = "Check";
const textToEnter2 = "Check the vote";
const holder2 = "Enter an ethereum address 0x.."
const textToEnter3 = "Get winner";


	return (
			<div className = "ui two column grid">
				<div className = "row">
					<div className = " sixteen wide column" >
						<div className = "ui visible message">
							<p style = {{textAlign:'center'}}>{currentState}</p>
						</div>
					</div>
				</div>
				<div className = "row">
					<div className = " sixteen wide column" >
						<SearchBar 
						textButton = {textButton1} 
						textToEnter = {textToEnter1} 
						holder = {holder1} 
						functionToCall = {submitVote} 
						/>
					</div>
				</div>
				<div className = "row">
					<div className = " eight wide column">
						<SearchBar 
						textButton = {textButton2} 
						textToEnter = {textToEnter2} 
						holder = {holder2}
						functionToCall = {checkVote}
						/>
					</div>
					<div className = "eight wide column">
						<div className = "ui visible message">
							<p>Vote : {proposalTab[voteVoter]}</p>
						</div>
					</div>
				</div>
				<div className = "row">
					<div className = "sixteen wide column">
						<Getter
							voteToSet = {winner[1]}
							valueToSet = {winner[0]} 
							textToEnter = {textToEnter3}
							checkWinner = {checkWinner}
						 />
					</div>
				</div>
			</div>
		)
}

export default VotersSection;