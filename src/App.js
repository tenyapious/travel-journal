import React from "react";
import "./App.css";
import Nav from "./component/Nav";
import Card from "./component/Card";
import data from "./data";

function App() {
	const cardEle = data.map((card) => {
		return <Card key={card.id.toString()} card={card} />;
	});
	return (
		<div className="container">
			<Nav />
			<div className="cards">{cardEle}</div>
		</div>
	);
}

export default App;
