import React from "react";
import "./components/styles/main.css";
import Table from "./components/Table";

function App() {
	return (
		<div className="App">
			<Table />
			<p className="footer">
				Made by <a href="http://ejer.ga/">ejer</a>
				<br />
				Based on{" "}
				<a href="https://github.com/TamalAnwar/periodic-table">
					Periodic Table
				</a>{" "}
				by <a href="https://github.com/TamalAnwar">Tamal Anwar Chowdhury</a>
			</p>
		</div>
	);
}

export default App;
