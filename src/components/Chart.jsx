import "../css/chart.css";
import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	Tooltip,
	ResponsiveContainer,
	YAxis,
	ReferenceLine,
	Legend,
	LabelList,
} from "recharts";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Chart = () => {
	const data = [
		{
			tanggal: "1",
			tegangan: 380,
			gas_consumption: 40,
			arus: 1400,
			cnt: 490,
		},
		{
			tanggal: "2",
			tegangan: 380,
			gas_consumption: 55,
			arus: 1506,
			cnt: 590,
		},
		{
			tanggal: "3",
			tegangan: 380,
			gas_consumption: 59,
			arus: 989,
			cnt: 350,
		},
		{
			tanggal: "4",
			tegangan: 380,
			gas_consumption: 80,
			arus: 1228,
			cnt: 480,
		},
		{
			tanggal: "5",
			tegangan: 380,
			gas_consumption: 100,
			arus: 1100,
			cnt: 460,
		},
		{
			tanggal: "6",
			tegangan: 380,
			gas_consumption: 70,
			arus: 600,
			cnt: 380,
		},
		{
			tanggal: "7",
			tegangan: 380,
			gas_consumption: 90,
			arus: 989,
			cnt: 350,
		},
		{
			tanggal: "8",
			tegangan: 380,
			gas_consumption: 70,
			arus: 1228,
			cnt: 480,
		},
		{
			tanggal: "9",
			tegangan: 380,
			gas_consumption: 40,
			arus: 1100,
			cnt: 460,
		},
		{
			tanggal: "10",
			tegangan: 380,
			gas_consumption: 50,
			arus: 1700,
			cnt: 380,
		},
		{
			tanggal: "11",
			tegangan: 380,
			gas_consumption: 58,
			arus: 1400,
			cnt: 490,
		},
		{
			tanggal: "12",
			tegangan: 380,
			gas_consumption: 59,
			arus: 1506,
			cnt: 590,
		},
		{
			tanggal: "13",
			tegangan: 380,
			gas_consumption: 45,
			arus: 989,
			cnt: 350,
		},
		{
			tanggal: "14",
			tegangan: 380,
			gas_consumption: 50,
			arus: 1228,
			cnt: 480,
		},
		{
			tanggal: "15",
			tegangan: 380,
			gas_consumption: 49,
			arus: 1100,
			cnt: 460,
		},
		{
			tanggal: "16",
			tegangan: 380,
			gas_consumption: 49,
			arus: 600,
			cnt: 380,
		},
		{
			tanggal: "17",
			tegangan: 380,
			gas_consumption: 80,
			arus: 989,
			cnt: 350,
		},
		{
			tanggal: "18",
			tegangan: 380,
			gas_consumption: 100,
			arus: 1228,
			cnt: 480,
		},
		{
			tanggal: "19",
			tegangan: 380,
			gas_consumption: 50,
			arus: 1100,
			cnt: 460,
		},
		{
			tanggal: "20",
			tegangan: 380,
			gas_consumption: 60,
			arus: 1700,
			cnt: 380,
		},
		{
			tanggal: "21",
			tegangan: 380,
			gas_consumption: 80,
			arus: 1400,
			cnt: 490,
		},
		{
			tanggal: "22",
			tegangan: 380,
			gas_consumption: 67,
			arus: 1506,
			cnt: 590,
		},
		{
			tanggal: "23",
			tegangan: 380,
			gas_consumption: 98,
			arus: 989,
			cnt: 350,
		},
		{
			tanggal: "24",
			tegangan: 380,
			gas_consumption: 59,
			arus: 1228,
			cnt: 480,
		},
		{
			tanggal: "25",
			tegangan: 380,
			gas_consumption: 78,
			arus: 1100,
			cnt: 460,
		},
		{
			tanggal: "26",
			tegangan: 380,
			gas_consumption: 70,
			arus: 600,
			cnt: 380,
		},
		{
			tanggal: "27",
			tegangan: 380,
			gas_consumption: 58,
			arus: 989,
			cnt: 350,
		},
		{
			tanggal: "28",
			tegangan: 380,
			gas_consumption: 50,
			arus: 1228,
			cnt: 480,
		},
		{
			tanggal: "29",
			tegangan: 380,
			gas_consumption: 58,
			arus: 1100,
			cnt: 460,
		},
		{
			tanggal: "30",
			tegangan: 380,
			gas_consumption: 40,
			arus: 1700,
			cnt: 380,
		},
	];
	const [data2, setData2] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/reports")
			.then((response) => {
				const options = { day: "numeric", month: "short" };
				const filteredData = response.data.filter(
					(item) => item.nama_mesin === "Striko 1"
				);
				setData2(
					filteredData.map((item) => ({
						tanggal: new Date(item.createdAt).toLocaleDateString(
							"en-GB",
							options
						),
						gas_consumption: item.gas_consumption,
					}))
				);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="chart">
			<h3 className="chartTitle"> Graphic Per Hari</h3>
			<ResponsiveContainer width="100%" aspect={5 / 1}>
				<BarChart data={data2.slice(-12)}>
					<XAxis dataKey="tanggal" />
					<YAxis />
					<Bar
						type="monotone"
						dataKey="gas_consumption"
						fill="#1e90ff"
						barSize={40}
					>
						<LabelList
							dataKey="gas_consumption"
							position="top"
							formatter={(value) => `${value}`}
						/>
					</Bar>
					<Tooltip />
					<Legend />
					<ReferenceLine
						y={60}
						stroke="red"
						strokeWidth={4}
						label={{
							value: "Limit 60",
							position: "left",
							fill: "red",
						}}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
