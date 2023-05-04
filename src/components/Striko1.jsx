import {
	LineChart,
	Line,
	Tooltip,
	Legend,
	ResponsiveContainer,
	XAxis,
	YAxis,
	ReferenceLine,
} from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Striko1 = () => {
	const [gasConsumptionData, setGasConsumptionData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:5000/permenithariini2jamterahir"
				);
				const data = response.data.map((item) => ({
					...item,
					createdAt: new Date(item.createdAt).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
						hour12: false,
					}),
					gas_consumption: item.gas_used,
				}));
				setGasConsumptionData(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();

		const interval = setInterval(() => {
			fetchData();
		}, 5000);

		return () => clearInterval(interval);
	}, []);

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
	// 		gasconsumption: 1000,
	// 		amt: 2210,
	// 	},
	// 	{
	// 		name: "Page C",
	// 		uv: 2000,
	// 		gasconsumption: 3800,
	// 		amt: 2290,
	// 	},
	// 	{
	// 		name: "Page D",
	// 		uv: 2780,
	// 		gasconsumption: 1000,
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
	// 		gasconsumption: 7000,
	// 		amt: 2100,
	// 	},
	// 	{
	// 		name: "Page H",
	// 		uv: 4000,
	// 		gasconsumption: 2000,
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
	// 		gasconsumption: 5908,
	// 		amt: 2000,
	// 	},
	// 	{
	// 		name: "Page L",
	// 		uv: 1890,
	// 		gasconsumption: 2800,
	// 		amt: 2181,
	// 	},
	// 	{
	// 		name: "Page M",
	// 		uv: 2390,
	// 		gasconsumption: 9800,
	// 		amt: 2500,
	// 	},
	// 	{
	// 		name: "Page N",
	// 		uv: 3490,
	// 		gasconsumption: 8300,
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
	// 		gasconsumption: 7398,
	// 		amt: 2210,
	// 	},
	// 	{
	// 		name: "Page Q",
	// 		uv: 2000,
	// 		gasconsumption: 6800,
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
	// 		gasconsumption: 2800,
	// 		amt: 2290,
	// 	},
	// 	{
	// 		name: "Page U",
	// 		uv: 2780,
	// 		gasconsumption: 9000,
	// 		amt: 2000,
	// 	},
	// ];

	return (
		<ResponsiveContainer width="100%" height={40} aspect={6 / 1}>
			<LineChart width={600} height={75} data={gasConsumptionData}>
				<XAxis dataKey="createdAt" tick={{ fontSize: 10 }} />
				<Line
					type="monotone"
					dataKey="gas_consumption"
					stroke="#1e90ff"
					strokeWidth={2}
					legendType="rect"
					dot={false} // add this line to remove dots
				/>
				<YAxis scale="log" domain={["dataMin", "dataMax"]} />
				<Tooltip />
				<Legend />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Striko1;
