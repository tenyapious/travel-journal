import React from "react";
import pointer from "../img/pointer.png";

export default function Card(props) {
	console.log(props);
	return (
		<div className="card">
			<div className="card-img">
				<img src={props.card.coverImg} />
			</div>
			<div className="card-info">
				<div className="location">
					<span className="location-name">
						<img src={pointer} />
						Japan
					</span>
					<a href="#" className="location-link">
						View on google maps
					</a>
				</div>
				<h2 className="title">Mount Fjui</h2>
				<div className="date">12 Jan, 2021 - 24 Jan, 2021</div>
				<p className="description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt in
					dolores error sequi qui illo nesciunt blanditiis laudantium, maiores
					nobis.
				</p>
			</div>
		</div>
	);
}
