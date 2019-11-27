import React from "react";
import "./components/styles/main.css";
import Table from "./components/Table";

function App() {
	return (
		<div className="App">
			<Table />
			<p className="footer">
				Made by <a href="https://github.com/datejer">ejer</a>
				<br />
				Based on Periodic Table by{" "}
				<a href="https://github.com/TamalAnwar">Tamal Anwar Chowdhury</a>
			</p>
		</div>
	);
}

export default App;
