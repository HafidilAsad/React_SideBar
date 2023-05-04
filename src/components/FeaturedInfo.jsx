import React from "react";
import "../css/featuredinfo.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const schedule = require("node-schedule");
const FeaturedInfo = () => {
	const [report, setReport] = useState([]);
	const [gas_used_kemarin, setGas_used_kemarin] = useState([]);
	const [dataperhari, setDataperhari] = useState([]);

	//mengambil data perhari dan mengirimkannya setiap hari sekali saja
	useEffect(() => {
		const now = new Date();
		if (now.getHours() === 11 && now.getMinutes() === 4) {
			const fetchData = async () => {
				try {
					const response = await axios.get("http://localhost:5000/striko1s");
					const data = response.data;
					const filteredData = data.filter((item) => item.id === 1);
					const gasConsumption = filteredData.length
						? filteredData[0].gas_consumption
						: null;
					setDataperhari(gasConsumption);
					const namaMesin = "Striko 1";
					const gasUsed = filteredData.length
						? filteredData[0].gas_used.split(" ")
						: null;
					const roundedGasConsumption = Math.round(gasConsumption * 100) / 100; // Example value, replace with your actual value
					console.log(gasUsed, namaMesin, gasConsumption);
					const postData = {
						nama_mesin: namaMesin,
						gas_used: parseFloat(gasUsed[0]),
						gas_consumption: roundedGasConsumption,
					};
					await axios.post("http://localhost:5000/reports", postData);
				} catch (error) {
					console.error(error);
				}
			};

			fetchData();
		}
	}, []);

	//mengambil data gas used kemarin
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get("http://localhost:5000/reports");
			const yesterday = new Date(Date.now() - 86400000);
			const filteredData = result.data.filter((item) => {
				const createdAt = new Date(item.createdAt);
				return (
					createdAt.getFullYear() === yesterday.getFullYear() &&
					createdAt.getMonth() === yesterday.getMonth() &&
					createdAt.getDate() === yesterday.getDate()
				);
			});
			const gasUsedData = filteredData.map((item) => item.gas_used);
			setGas_used_kemarin(gasUsedData);
		};
		fetchData();
	}, []);

	// menngammbil data dan post data sekali sehari sesuai jam
	const getData = async () => {
		try {
			const response = await axios.get("http://localhost:5000/striko1s");

			// Filter the response data to include only records with id=1 and the gas_used value
			const filteredData = response.data
				.filter((item) => item.id === 1 && item.gas_consumption !== undefined)
				.map((item) => item.gas_consumption);

			return filteredData;
		} catch (error) {
			console.error("Error getting data:", error);
		}
	};

	//PROGRAM INI MASIH BERMASALAH KARENA NGEPOST NYA RATUSAN KALI SEHARI
	const postDataUrl = "http://localhost:5000/addreports";

	const postDataOnce = (() => {
		let hasPostedData = false;

		return async (data) => {
			if (!hasPostedData) {
				try {
					const response = await axios.post(postDataUrl, data);
					console.log("Data posted:", response.data);
					hasPostedData = true;
				} catch (error) {
					console.error("Error posting data:", error);
				}
			} else {
				console.log("Data already posted today.");
			}
		};
	})();

	// const resetDataPostedStatus = () => {
	// 	localStorage.removeItem("lastPostDate");
	// 	console.log("Data posted status reset.");
	// };
	// resetDataPostedStatus();

	// Program Schedule nya
	let hasPostedData = false;

	setInterval(async () => {
		const now = new Date();
		const targetTime = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
			7,
			40,
			0
		);

		if ((now = targetTime && !hasPostedData)) {
			const gasUsedMentah = await getData();
			const gasUsed = gasUsedMentah - gas_used_kemarin;
			const namaMesin = "Striko 1";
			const gasConsumption = (gasUsed / 12789) * 1000;
			const roundedGasConsumption = gasConsumption.toFixed(1);
			console.log(gasUsed, namaMesin, gasConsumption, gas_used_kemarin);
			const currentDate = new Date().toISOString().slice(0, 10);
			const lastPostDate = localStorage.getItem("lastPostDate");
			if (lastPostDate !== currentDate) {
				const data = {
					nama_mesin: namaMesin,
					gas_used: gasUsed,
					gas_consumption: roundedGasConsumption,
				};
				try {
					await postDataOnce(data);
					hasPostedData = true;
					// Delay execution for 24 hours
					setTimeout(() => {
						hasPostedData = false;
					}, 24 * 60 * 60 * 1000);
				} catch (error) {
					console.error("Error posting data:", error);
				}
				localStorage.setItem("lastPostDate", currentDate);
			}
		} else if (now < targetTime) {
			hasPostedData = false;
		}
	}, 60000);

	// Reset the flag at midnight

	//mengambil data realtime dari sensor
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
		<div className="featured">
			<div className="featuredItem">
				<span className="featuredTitle">
					<h3 className="featuredtext">GAS USED</h3>
				</span>
				<div className="featuredMoneyContainer">
					{report
						.filter(({ id }) => id === 1)
						.map((item) => (
							<span className="featuredMoney">
								{item.gas_consumption - gas_used_kemarin} M³
							</span>
						))}
					<span className="featuredMoneyRate">
						{/* -11.4 <ArrowDownward className="featuredIcon negative" /> */}
					</span>
				</div>
				<span className="featuredSub"> data monitoring</span>
			</div>
			<div className="featuredItem">
				<span className="featuredTitle">
					<h3 className="featuredtext">GAS CONSUMPTION</h3>
				</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney"> 50 M³/Ton</span>
					<span className="featuredMoneyRate">
						{/* -1.4 <ArrowDownward className="featuredIcon negative" /> */}
					</span>
				</div>
				<span className="featuredSub"> data monitoring</span>
			</div>
			<div className="featuredItem">
				<span className="featuredTitle">
					<h3 className="featuredtext">FLOW </h3>
				</span>
				<div className="featuredMoneyContainer">
					{report
						.filter(({ id }) => id === 1)
						.map((item) => (
							<span className="featuredMoney"> {item.gas_used} M³/h</span>
						))}
					<span className="featuredMoneyRate">
						{/* +2.4 <ArrowUpward className="featuredIcon" /> */}
					</span>
				</div>

				<span className="featuredSub"> data monitoring</span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
