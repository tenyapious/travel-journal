import React from "react";
import pointer from "../img/pointer.png";

export default function Card(props) {
	return (
		<div className="card">
			<div className="card-img" alt="location">
				<img src={props.card.coverImg} />
			</div>
			<div className="card-info">
				<div className="location">
					<span className="location-name">
						<img src={pointer} />
						{props.card.location}
					</span>
					<a href="#" className="location-link">
						View on google maps
					</a>
				</div>
				<h2 className="title">{props.card.title}</h2>
				<div className="date">{props.card.date}</div>
				<p className="description">{props.card.description}</p>
			</div>
		</div>
	);
}
