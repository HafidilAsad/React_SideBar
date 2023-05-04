import React from "react";
import {
	LineChart,
	Line,
	Legend,
	ResponsiveContainer,
	XAxis,
	Tooltip,
} from "recharts";
import "../css/chart.css";
import dayjs from "dayjs";

const SwiftAsia = () => {
	const data = [
		{ date: "2022-03-01", value: 10 },
		{ date: "2022-03-02", value: 15 },
		{ date: "2022-03-03", value: 20 },
		{ date: "2022-03-04", value: 19 },
		{ date: "2022-03-05", value: 15 },
		{ date: "2022-03-06", value: 40 },
		{ date: "2022-03-07", value: 50 },
		{ date: "2022-03-08", value: 35 },
		{ date: "2022-03-09", value: 20 },
		{ date: "2022-03-10", value: 70 },
		{ date: "2022-03-11", value: 15 },
		{ date: "2022-03-12", value: 50 },
		{ date: "2022-03-13", value: 10 },
		{ date: "2022-03-14", value: 95 },
		{ date: "2022-03-15", value: 20 },
		{ date: "2022-03-16", value: 10 },
		{ date: "2022-03-17", value: 15 },
		{ date: "2022-03-18", value: 20 },
		{ date: "2022-03-19", value: 10 },
		{ date: "2022-03-20", value: 15 },
		{ date: "2022-03-21", value: 20 },
		{ date: "2022-03-22", value: 10 },
		{ date: "2022-03-23", value: 15 },
		{ date: "2022-03-24", value: 20 },
		{ date: "2022-03-25", value: 10 },
		{ date: "2022-03-26", value: 15 },
		{ date: "2022-03-27", value: 20 },
	];
	const formattedData = data.map((entry) => {
		return {
			...entry,
			date: dayjs(entry.date).format("DD MMM"),
		};
	});
	// const data = [
	// 	{
	// 		name: "Page A",
	// 		uv: 4000,
	// 		gasconsumption: 1398,
	// 		amt: 2400,
	// 	},
	// 	{
	// 		name: "Page B",
	// 		uv: 3000,
	// 		gasconsumption: 5000,
	// 		amt: 2210,
	// 	},
	// 	{
	// 		name: "Page C",
	// 		uv: 2000,
	// 		gasconsumption: 9800,
	// 		amt: 2290,
	// 	},
	// 	{
	// 		name: "Page D",
	// 		uv: 2780,
	// 		gasconsumption: 7000,
	// 		amt: 2000,
	// 	},
	// 	{
	// 		name: "Page E",
	// 		uv: 1890,
	// 		gasconsumption: 1000,
	// 		amt: 2181,
	// 	},
	// 	{
	// 		name: "Page F",
	// 		uv: 2390,
	// 		gasconsumption: 9000,
	// 		amt: 2500,
	// 	},
	// 	{
	// 		name: "Page G",
	// 		uv: 3490,
	// 		gasconsumption: 2000,
	// 		amt: 2100,
	// 	},
	// 	{
	// 		name: "Page H",
	// 		uv: 4000,
	// 		gasconsumption: 8000,
	// 		amt: 2400,
	// 	},
	// 	{
	// 		name: "Page I",
	// 		uv: 3000,
	// 		gasconsumption: 4000,
	// 		amt: 2210,
	// 	},
	// 	{
	// 		name: "Page J",
	// 		uv: 2000,
	// 		gasconsumption: 5000,
	// 		amt: 2290,
	// 	},
	// 	{
	// 		name: "Page K",
	// 		uv: 2780,
	// 		gasconsumption: 3908,
	// 		amt: 2000,
	// 	},
	// 	{
	// 		name: "Page L",
	// 		uv: 1890,
	// 		gasconsumption: 4800,
	// 		amt: 2181,
	// 	},
	// 	{
	// 		name: "Page M",
	// 		uv: 2390,
	// 		gasconsumption: 3800,
	// 		amt: 2500,
	// 	},
	// 	{
	// 		name: "Page N",
	// 		uv: 3490,
	// 		gasconsumption: 4300,
	// 		amt: 2100,
	// 	},
	// 	{
	// 		name: "Page O",
	// 		uv: 4000,
	// 		gasconsumption: 2400,
	// 		amt: 2400,
	// 	},
	// 	{
	// 		name: "Page P",
	// 		uv: 3000,
	// 		gasconsumption: 1398,
	// 		amt: 2210,
	// 	},
	// 	{
	// 		name: "Page Q",
	// 		uv: 2000,
	// 		gasconsumption: 9800,
	// 		amt: 2290,
	// 	},
	// 	{
	// 		name: "Page R",
	// 		uv: 4000,
	// 		gasconsumption: 1398,
	// 		amt: 2400,
	// 	},
	// 	{
	// 		name: "Page S",
	// 		uv: 3000,
	// 		gasconsumption: 5000,
	// 		amt: 2210,
	// 	},
	// 	{
	// 		name: "Page T",
	// 		uv: 2000,
	// 		gasconsumption: 9800,
	// 		amt: 2290,
	// 	},
	// 	{
	// 		name: "Page U",
	// 		uv: 2780,
	// 		gasconsumption: 7000,
	// 		amt: 2000,
	// 	},
	// ];

	return (
		<div className="striko1chart">
			<ResponsiveContainer width="100%" height={20} aspect={8 / 1}>
				<LineChart width={100} height={70} data={formattedData}>
					<Line
						type="monotone"
						dataKey="value"
						stroke="#1e90ff"
						strokeWidth={2}
						legendType="rect"
					/>
					<XAxis dataKey="date" />
					<Legend />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default SwiftAsia;
