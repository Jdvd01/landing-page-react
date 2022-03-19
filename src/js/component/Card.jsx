import React from "react";

const Card = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://picsum.photos/id/516/500"
				className="card-img-top"
				alt="Imagen"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
			</div>
			<div className="card-footer">
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
};

export default Card;
