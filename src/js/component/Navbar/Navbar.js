import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="https://getbootstrap.com/">
				Start Bootstrap
			</a>
			<div className="row">
				<a className="text-white p-2" href="#">
					Home
				</a>
				<a className="text-white p-2" href="#">
					About
				</a>
				<a className="text-white p-2" href="#">
					Services
				</a>
				<a className="text-white p-2" href="#">
					Contact
				</a>
			</div>
		</nav>
	);
};
