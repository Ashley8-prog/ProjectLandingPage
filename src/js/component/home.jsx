import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<>
			<div className="container-fluid">
				<Navbar />
			</div>

			<div className="container divv">
				<Jumbotron />
			</div>
			<div className="row cartas">
				<Cards col-3 />
				<Cards col-3 />
				<Cards col-3 />
				<Cards col-3 />
			</div>

			<div className="container-fluid">
				<Footer />
			</div>


		</>
	);
};

export default Home;
