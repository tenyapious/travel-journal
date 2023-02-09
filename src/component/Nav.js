import React from "react";
import logo from "../img/logo.png";

export default function Nav() {
	return (
		<nav>
			<h1 id="logo">
				<img src={logo} alt="site logo" /> my travel journal
			</h1>
		</nav>
	);
}
