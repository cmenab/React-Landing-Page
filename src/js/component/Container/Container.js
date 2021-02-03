import React from "react";

import { Navbar } from "../Navbar/Navbar.js";

import { Jumbotron } from "../Jumbotron/Jumbotron.js";

import { Card } from "../Card/Card.js";

import { Footer } from "../Footer/Footer.js";

export const Container = () => {
	return (
		<div id="main-container">
			{/* Navbar Container */}
			<div id="navbar-container">
				<Navbar />
			</div>
			{/* Body container */}
			<div className="container">
				<div className="row">
					<Jumbotron />
				</div>
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			{/* Footer Container */}
			<div id="footer-container">
				<Footer />
			</div>
		</div>
	);
};
