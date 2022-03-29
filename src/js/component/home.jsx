import React from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Container from "./Container.jsx";

const Home = () => {
	return (
		<>
			<div>
				<NavBar />
				<Container />
				<Footer />
			</div>
		</>
	);
};

export default Home;