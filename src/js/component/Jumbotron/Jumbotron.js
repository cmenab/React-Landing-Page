import React from "react";

export const Jumbotron = () => {
	return (
		<div className="bg-light p-2">
			<h1 className="display-4 p-2">A Warm Welcome!</h1>
			<p className="lead p-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Adipisci, quod! Consectetur, eaque! Nulla ipsa at repellat
				pariatur enim, optio porro, deserunt sint nostrum, veritatis ut
				aliquid ratione doloribus. Est, eos.
			</p>
			<hr className="my-4" />
			<p className="p-2">
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to Action!
				</a>
			</p>
		</div>
	);
};
