import React from "react";
export default function Cocktail({ id, date, team1, team2, winner }) {
	return (
		<>
			<div className='match'>
				<h5 className='date'>Match {date}</h5>
				<hr />
				<div className='teams'>
					<div className='team-1'>
						<div className='team-name-1'>{team1}</div>
					</div>
					<div className='vs'>VS</div>
					<div className='team-2'>
						<div className='team-name-2'>{team2}</div>
					</div>
				</div>
				<hr />
				<h4>Winner - {winner}</h4>
				<hr />
			</div>
		</>
	);
}
