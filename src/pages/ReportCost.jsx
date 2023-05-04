import React from "react";
import "../css/reportcost.css";
import axios from "axios";
import { useState, useEffect } from "react";

const ReportCost = () => {
	const [costs, setCost] = useState([]);

	useEffect(() => {
		getCosts();
	}, []);

	const getCosts = async () => {
		const response = await axios.get("http://localhost:5000/costs");
		setCost(response.data);
	};
	return (
		<div className="table1">
			<div className="column is-half">
				<div className="costheader">
					<br />
					<h1 className="form-label"> COST REPORT PERBULAN</h1>
				</div>
				<br />
				<table className="table1">
					<thead>
						<tr>
							<th>No</th>
							<th>Biaya Normal (USD)</th>
							<th>Biaya Surcharge (USD)</th>
							<th>Biaya Normal (Rp)</th>
							<th>Biaya Surcharge (Rp)</th>
							<th>Bulan</th>
						</tr>
					</thead>
					<tbody>
						{costs.map((cost, index) => (
							<tr key={cost.id}>
								<td>{index + 1}</td>
								<td>{cost.biaya_normal}</td>
								<td>{cost.biaya_surcharge}</td>
								<td>{cost.biaya_normalRp}</td>
								<td>{cost.biaya_surchargeRp}</td>
								<td>{cost.bulan}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ReportCost;
