import React from "react";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import NavbarDashboard from "../components/NavbarDashboard";

const Home = () => {
	return (
		<div>
			<NavbarDashboard />
			<FeaturedInfo />
			<Chart />
		</div>
	);
};

export default Home;
