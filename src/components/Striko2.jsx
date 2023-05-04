import React from "react";
import {
	LineChart,
	Line,
	Legend,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
import "../css/chart.css";

const Striko2 = () => {
	const data = [
		{
			name: "Page A",
			uv: 4000,
			gasconsumption: 1398,
			amt: 2400,
		},
		{
			name: "Page B",
			uv: 3000,
			gasconsumption: 5000,
			amt: 2210,
		},
		{
			name: "Page C",
			uv: 2000,
			gasconsumption: 9800,
			amt: 2290,
		},
		{
			name: "Page D",
			uv: 2780,
			gasconsumption: 7000,
			amt: 2000,
		},
		{
			name: "Page E",
			uv: 1890,
			gasconsumption: 1000,
			amt: 2181,
		},
		{
			name: "Page F",
			uv: 2390,
			gasconsumption: 9000,
			amt: 2500,
		},
		{
			name: "Page G",
			uv: 3490,
			gasconsumption: 2000,
			amt: 2100,
		},
		{
			name: "Page H",
			uv: 4000,
			gasconsumption: 8000,
			amt: 2400,
		},
		{
			name: "Page I",
			uv: 3000,
			gasconsumption: 4000,
			amt: 2210,
		},
		{
			name: "Page J",
			uv: 2000,
			gasconsumption: 5000,
			amt: 2290,
		},
		{
			name: "Page K",
			uv: 2780,
			gasconsumption: 3908,
			amt: 2000,
		},
		{
			name: "Page L",
			uv: 1890,
			gasconsumption: 4800,
			amt: 2181,
		},
		{
			name: "Page M",
			uv: 2390,
			gasconsumption: 3800,
			amt: 2500,
		},
		{
			name: "Page N",
			uv: 3490,
			gasconsumption: 4300,
			amt: 2100,
		},
		{
			name: "Page O",
			uv: 4000,
			gasconsumption: 2400,
			amt: 2400,
		},
		{
			name: "Page P",
			uv: 3000,
			gasconsumption: 1398,
			amt: 2210,
		},
		{
			name: "Page Q",
			uv: 2000,
			gasconsumption: 9800,
			amt: 2290,
		},
		{
			name: "Page R",
			uv: 4000,
			gasconsumption: 1398,
			amt: 2400,
		},
		{
			name: "Page S",
			uv: 3000,
			gasconsumption: 5000,
			amt: 2210,
		},
		{
			name: "Page T",
			uv: 2000,
			gasconsumption: 9800,
			amt: 2290,
		},
		{
			name: "Page U",
			uv: 2780,
			gasconsumption: 7000,
			amt: 2000,
		},
	];

	return (
		<div className="striko1chart">
			<ResponsiveContainer width="100%" height={20} aspect={8 / 1}>
				<LineChart width={100} height={70} data={data}>
					<Line
						type="monotone"
						dataKey="gasconsumption"
						stroke="#1e90ff"
						strokeWidth={2}
						legendType="rect"
					/>
					<Tooltip />
					<Legend />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Striko2;
