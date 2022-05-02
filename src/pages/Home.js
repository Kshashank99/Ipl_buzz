import React from "react";
import MatchLists from "../components/MatchLists";
export default function Home({selectedItem, setSelectedItem}) {
	return (
		<main>
			<MatchLists selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
		</main>
	);
}
