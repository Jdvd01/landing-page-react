import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

const Container = () => {
	return (
		<div className="container">
			<Jumbotron />
			<div className="d-flex justify-content-between">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Container;
