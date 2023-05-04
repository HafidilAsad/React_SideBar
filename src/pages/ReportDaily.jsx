import React from "react";
import "../css/reportdaily.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import format from "date-fns/format";
import { addDays } from "date-fns";
import { DownloadTableExcel } from "react-export-table-to-excel";

const ReportDaily = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [allReports, setAllReport] = useState([]);

	const [report, setReport] = useState([]);

	useEffect(() => {
		getReports();
		// event listeners
		document.addEventListener("keydown", hideOnEscape, true);
		document.addEventListener("click", hideOnClickOutside, true);
	}, []);

	const getReports = async () => {
		const response = await axios.get("http://localhost:5000/reports");
		setReport(response.data);
		setAllReport(response.data);
	};

	const handleSelect = (date) => {
		let filtered = allReports.filter((report) => {
			let reportDate = new Date(report["createdAt"]);
			return (
				reportDate >= date.selection.startDate &&
				reportDate <= date.selection.endDate
			);
		});
		setStartDate(date.selection.startDate);
		setEndDate(date.selection.endDate);
		setReport(filtered);
	};

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	// const [visible, setVisible] = React.useState(false);
	const [visible] = React.useState(false);

	// date state
	//const [range, setRange] = useState([
	const [range] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: "selection",
		},
	]);

	//open close
	const [open, setOpen] = useState(false);

	//get the element to toogle
	const refOne = useRef(null);

	// hide dropdown on ESC press
	const hideOnEscape = (e) => {
		// console.log(e.key)
		if (e.key === "Escape") {
			setOpen(false);
		}
	};

	// Hide dropdown on outside click
	const hideOnClickOutside = (e) => {
		// console.log(refOne.current)
		// console.log(e.target)
		if (refOne.current && !refOne.current.contains(e.target)) {
			setOpen(false);
		}
	};

	const tableRef = useRef(null);
	return (
		<div className="table1">
			<div className="form-label">
				<h2> Gas Consumption Report per Hari</h2>
			</div>
			{/* <div>
                <div className='date1'>
                <input className='inputdate'
                 type="date"
                 onChange={handleChange}
                 ref={dateInputRef}
                 />
                <p className='dateTitle'>Selected Date: {date}</p>
                </div> 
            </div> */}
			<div>
				<style>
					{`
                .element-visible { display: block }
                .element-hidden { display: none }
                `}
				</style>
				{/* <button onClick={() => setVisible(!visible)}>{visible ? 'Close Date' : 'Select Date'}</button> */}
				<div className={visible ? "element-visible" : "element-hidden"}>
					<DateRangePicker
						ranges={[selectionRange]}
						onChange={handleSelect}
						staticRanges={[]}
						inputRanges={[]}
					/>
				</div>
				<p className="form-label"> Select Date :</p>
			</div>
			<div className="calendarWrap">
				<input
					value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
						range[0].endDate,
						"MM/dd/yyyy"
					)}`}
					readOnly
					className="inputBox"
					onClick={() => setOpen((open) => !open)}
				/>

				<div ref={refOne}>
					{open && (
						<DateRangePicker
							ranges={[selectionRange]}
							onChange={handleSelect}
							staticRanges={[]}
							inputRanges={[]}
						/>
					)}
				</div>
			</div>
			<table className="tablereport" ref={tableRef}>
				<thead>
					<tr>
						<th>No</th>
						<th>Nama Mesin</th>
						<th>Gas Used</th>
						<th>Gas Consumption</th>
						<th>Tanggal</th>
					</tr>
				</thead>
				<tbody>
					{report.map((report, index) => {
						let date = new Date(report["createdAt"]);
						return (
							<tr key={report.id}>
								<td>{index + 1}</td>
								<td>{report.nama_mesin}</td>
								<td>{report.gas_used}</td>
								<td>{report.gas_consumption}</td>
								<td>
									{date.toLocaleDateString("id-ID", {
										day: "2-digit",
										month: "2-digit",
										year: "numeric",
									})}
								</td>
								{/* <td>{report.createdAt}</td> */}
							</tr>
						);
					})}
				</tbody>
			</table>
			<br />
			<DownloadTableExcel
				filename="daily report"
				sheet="reports"
				currentTableRef={tableRef.current}
			>
				<button className="submit-button"> Download Excel </button>
			</DownloadTableExcel>
		</div>
	);
};

export default ReportDaily;
