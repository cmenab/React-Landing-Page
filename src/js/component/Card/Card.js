import React from "react";

export const Card = () => {
	return (
		<div className="col-sm card mx-1 my-3">
			<img
				className="card-img-top img-fluid"
				src="https://picsum.photos/100/100/"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
