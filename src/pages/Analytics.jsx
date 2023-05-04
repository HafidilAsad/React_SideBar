import React from "react";
import "../css/analytic.css";
import Striko1 from "../components/Striko1";
import Striko2 from "../components/Striko2";
import Striko3 from "../components/Striko3";
import SwiftAsia from "../components/SwiftAsia";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import Layout from "./Layout";

//import Chart from "../components/Chart";

//import { Link } from "react-router-dom";

const Analytics = () => {
	const [report, setReport] = useState([]);

	useEffect(() => {
		const getReports = async () => {
			const result = await axios.get("http://localhost:5000/striko1s");
			setReport(result.data);
		};

		// Memanggil getReports setiap 1 detik
		const intervalId = setInterval(() => {
			getReports();
		}, 500);

		// Membersihkan interval ketika komponen unmount
		return () => clearInterval(intervalId);
	}, []); // Menambahkan array dependensi kosong

	return (
		<div className="grid-container">
			<div className="card-grid item1">
				<div className="title-grid">STRIKO 1</div>
				{report
					.filter(({ id }) => id === 1)
					.map((item) => (
						<div className="valuegas">
							{item.gas_used}
							<span className="satuan">M³/h</span>
						</div>
					))}
			</div>
			<div className="card-grid item2">
				<Striko1 />
			</div>
			<div className="card-grid item3">
				<div className="title-grid">STRIKO 2</div>
				{report
					.filter(({ id }) => id === 2)
					.map((item) => (
						<div className="valuegas">
							{item.gas_used}
							<span className="satuan">M³/h</span>
						</div>
					))}
			</div>
			<div className="card-grid ">
				<Striko2 />
			</div>
			<div className="card-grid item5">
				<div className="title-grid">
					STRIKO 3
					{report
						.filter(({ id }) => id === 3)
						.map((item) => (
							<div className="valuegas">
								{item.gas_used}
								<span className="satuan">M³/h</span>
							</div>
						))}
				</div>
			</div>
			<div className="card-grid">
				<Striko3 />
			</div>
			<div className="card-grid item7">
				<div className="title-grid">SWIFT ASIA</div>
				{report
					.filter(({ id }) => id === 4)
					.map((item) => (
						<div className="valuegas">
							{item.gas_used}
							<span className="satuan">M³/h</span>
						</div>
					))}
			</div>
			<div className="card-grid">
				<SwiftAsia />
			</div>
		</div>
	);
};

export default Analytics;
