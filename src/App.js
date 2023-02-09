import React from "react";
import "./App.css";
import Nav from "./component/Nav";
import Card from "./component/Card";
import data from "./data";

function App() {
	return (
		<div className="container">
			<Nav />
			<Card card={data[0]} />
		</div>
	);
}

export default App;
