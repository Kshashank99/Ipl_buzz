import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Table from "./pages/Table";
import Navbar from "./components/Navbar";

function App() {
	const [selectedItem, setSelectedItem] = React.useState([]);
	console.log(selectedItem);
	return (
		<Router>
			<Navbar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			<Routes>
				<Route
					exact
					path='/'
					element={
						<Home
							selectedItem={selectedItem}
							setSelectedItem={setSelectedItem}
						/>
					}></Route>
				<Route path='/about' element={<Table />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
