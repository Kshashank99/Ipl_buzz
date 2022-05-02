import React from "react";
import Match from "./Match";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

export default function CocktailList({ selectedItem, setSelectedItem }) {
	const { cricket, loading } = useGlobalContext();
	console.log(loading);
	const TeamInput = cricket.filter((c) => {
		for (let i = 0; i < selectedItem.length; i++) {
			if (c.team1 === selectedItem[i] || c.team2 === selectedItem[i]) {
				return c;
			}
		}
	});
	console.log(TeamInput);
	if (loading) {
		return <Loading />;
	}

	return (
		<section className='section'>
			<div className='matchlists-center'>
				{(TeamInput.length > 0 ? TeamInput : cricket).map((item) => {
					return <Match key={item.id} {...item} />;
				})}
			</div>
		</section>
	);
}
