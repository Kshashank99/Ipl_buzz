import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url =
	"https://gist.githubusercontent.com/hdck007/57650c774d9631c097db855bf110a4b6/raw/58b00de2a8c06831fda2f471e1b635a90208a4be/ipl.json";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [cricket, setCricket] = useState([]);

	const fetchTeam = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			// console.log(data);
			// const { teams } = data;
			if (data) {
				const newTeams = data.map((item) => {
					const { id, date, team1, team2, winner } = item;

					return {
						id: id,
						date: date,
						team1: team1,
						team2: team2,
						winner: winner
					};
				});
				setCricket(newTeams);
			} else {
				setCricket([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	});
	useEffect(() => {
		fetchTeam();
	}, []);
	return (
		<AppContext.Provider value={{ cricket, loading }}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
