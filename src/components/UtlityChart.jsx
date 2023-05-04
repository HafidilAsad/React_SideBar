import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	ReferenceLine,
} from "recharts";
import "../css/chart.css";

const UtlityChart = () => {
	const data = [
		{ month: "Jan", value: 100 },
		{ month: "Feb", value: 200 },
		{ month: "Mar", value: 300 },
		{ month: "Apr", value: 200 },
		{ month: "May", value: 500 },
		{ month: "Jun", value: 600 },
		{ month: "jul", value: 400 },
		{ month: "Agus", value: 200 },
		{ month: "Sept", value: 500 },
		{ month: "Okt", value: 500 },
		{ month: "Nov", value: 800 },
		{ month: "Des", value: 600 },
	];
	return (
		<div>
			<div className="chart">
				<h3 className="chartTitle"> Graphic Per Hari</h3>
				<ResponsiveContainer width="100%" aspect={5 / 1}>
					<BarChart width={450} height={440} data={data}>
						<XAxis dataKey="month" />
						<YAxis />
						<Bar type="monotone" dataKey="value" fill="#1e90ff" barSize={50} />
						<Tooltip />
						<Legend />
						<ReferenceLine
							y={600}
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
			<div className="chart">
				<h3 className="chartTitle"> Graphic Per Hari</h3>
				<ResponsiveContainer width="100%" aspect={5 / 1}>
					<BarChart width={450} height={440} data={data}>
						<XAxis dataKey="month" />
						<YAxis />
						<Bar type="monotone" dataKey="value" fill="#1e90ff" barSize={50} />
						<Tooltip />
						<Legend />
						<ReferenceLine
							y={600}
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
		</div>
	);
};

export default UtlityChart;
