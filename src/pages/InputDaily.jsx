import React, { useState } from "react";
import "../css/inputdaily.css";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
	NotificationManager,
	NotificationContainer,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const InputDaily = () => {
	const [gas_used, setGasusedstriko1] = useState("");
	const [gas_consumption, setGasconsumptionstriko1] = useState("");
	const [gasusedstriko2, setGasusedstriko2] = useState("");
	const [gasconsumptionstriko2, setGasconsumptionstriko2] = useState("");
	const [gasusedstriko3, setGasusedstriko3] = useState("");
	const [gasconsumptionstriko3, setGasconsumptionstriko3] = useState("");
	const [gasusedswiftasia, setGasusedswiftasia] = useState("");
	const [gasconsumptionswiftasia, setGasconsumptionswiftasia] = useState("");
	const [nama_mesin, setNama_mesin] = useState("STRIKO1");
	const [status, setStatus] = useState("");

	//const navigate = useNavigate();

	const saveStriko1 = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/addreports", {
				nama_mesin,
				gas_used,
				gas_consumption,
			});
			setStatus("success");
			NotificationManager.success("Data berhasil disimpan", "Sukses", 2000);
		} catch (error) {
			console.log(error);
			setStatus("error");
		}
	};

	// const renderNotification = () => {
	// 	if (status === "success") {
	// 		return <div>Data berhasil disimpan</div>;
	// 	} else if (status === "error") {
	// 		return <div>Gagal menyimpan data</div>;
	// 	} else {
	// 		return null;
	// 	}
	// };

	const saveStriko2 = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/addreports", {
				nama_mesin,
				gas_used,
				gas_consumption,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const saveStriko3 = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/addreports", {
				nama_mesin,
				gas_used,
				gas_consumption,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const saveSwiftasia = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/addreports", {
				nama_mesin,
				gas_used,
				gas_consumption,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div>
				<h3 className="title-form"> INPUT GAS CONSUMPTION DAILY</h3>
			</div>
			<br />
			<form onSubmit={saveStriko1}>
				<div className="form-container">
					<div className="form-item">
						<label className="form-label">INPUT GAS USED</label>
						<input
							type="text"
							placeholder="gas used"
							// value={email}
							//onChange={handleEmailChange}
							value={gas_used}
							onChange={(e) => setGasusedstriko1(e.target.value)}
							className="form-input"
						/>
					</div>
					<div className="form-item">
						<label className="form-label">INPUT GAS CONSUMPTION</label>
						<input
							type="text"
							placeholder="gas consumption"
							// value={email}
							//onChange={handleEmailChange}
							value={gas_consumption}
							onChange={(e) => setGasconsumptionstriko1(e.target.value)}
							className="form-input"
						/>
					</div>
					<div className="form-item">
						<label className="form-label">INPUT GAS CONSUMPTION</label>
						<select
							value={nama_mesin}
							onChange={(e) => setNama_mesin(e.target.value)}
							style={{ width: "300px", height: "38px" }}
							className="form-label"
						>
							<option value="STRIKO1">STRIKO1</option>
							<option value="STRIKO2">STRIKO2</option>
							<option value="STRIKO3">STRIKO3</option>
							<option value="SWIFTASIA">SWIFT ASIA</option>
						</select>
					</div>

					<div className="form-item">
						<label className="form-label">.</label>

						<button type="submit" className="submit-button">
							SUBMIT
						</button>
					</div>
				</div>
			</form>
			{status === "success"}
			{status === "error" && <p>Gagal menyimpan data</p>}
			<NotificationContainer />
			<br />
			<form onSubmit={saveStriko2}>
				<div className="form-container">
					<div className="form-item">
						<label className="form-label">INPUT GAS USED</label>
						<input
							type="text"
							placeholder="gas used"
							// value={email}
							//onChange={handleEmailChange}
							value={gasusedstriko2}
							onChange={(e) => setGasusedstriko2(e.target.value)}
							className="form-input"
						/>
					</div>
					<div className="form-item">
						<label className="form-label">INPUT GAS CONSUMPTION</label>
						<input
							type="text"
							placeholder="gas consumption"
							// value={email}
							//onChange={handleEmailChange}
							value={gasconsumptionstriko2}
							onChange={(e) => setGasconsumptionstriko2(e.target.value)}
							className="form-input"
						/>
					</div>
					<div className="form-item">
						<label className="form-label">INPUT GAS CONSUMPTION</label>
						<select
							value={nama_mesin}
							onChange={(e) => setNama_mesin(e.target.value)}
							style={{ width: "300px", height: "38px" }}
							className="form-label"
						>
							<option value="STRIKO1">STRIKO1</option>
							<option value="STRIKO2">STRIKO2</option>
							<option value="STRIKO3">STRIKO3</option>
							<option value="SWIFTASIA">SWIFT ASIA</option>
						</select>
					</div>

					<div className="form-item">
						<label className="form-label">.</label>

						<button type="submit" className="submit-button">
							SUBMIT
						</button>
					</div>
				</div>
			</form>
			<br />
			<form onSubmit={saveStriko3}>
				<div className="form-container">
					<div className="form-item">
						<label className="form-label">INPUT GAS USED</label>
						<input
							type="text"
							placeholder="gas used"
							// value={email}
							//onChange={handleEmailChange}
							value={gasusedstriko3}
							onChange={(e) => setGasusedstriko3(e.target.value)}
							className="form-input"
						/>
					</div>
					<div className="form-item">
						<label className="form-label">INPUT GAS CONSUMPTION</label>
						<input
							type="text"
							placeholder="gas consumption"
							// value={email}
							//onChange={handleEmailChange}
							value={gasconsumptionstriko3}
							onChange={(e) => setGasconsumptionstriko3(e.target.value)}
							className="form-input"
						/>
					</div>
					<div className="form-item">
						<label className="form-label">INPUT GAS CONSUMPTION</label>
						<select
							value={nama_mesin}
							onChange={(e) => setNama_mesin(e.target.value)}
							style={{ width: "300px", height: "38px" }}
							className="form-label"
						>
							<option value="STRIKO1">STRIKO1</option>
							<option value="STRIKO2">STRIKO2</option>
							<option value="STRIKO3">STRIKO3</option>
							<option value="SWIFTASIA">SWIFT ASIA</option>
						</select>
					</div>
					<div className="form-item">
						<label className="form-label">.</label>

						<button type="submit" className="submit-button">
							SUBMIT
						</button>
					</div>
				</div>
			</form>
			<br />
			<form onSubmit={saveSwiftasia}>
				<div className="form-container">
					<div className="form-item">
						<label className="form-label">INPUT GAS USED</label>
						<input
							type="text"
							placeholder="gas used"
							// value={email}
							//onChange={handleEmailChange}
							value={gasusedswiftasia}
							onChange={(e) => setGasusedswiftasia(e.target.value)}
							className="form-input"
						/>
					</div>
					<div className="form-item">
						<label className="form-label">INPUT GAS CONSUMPTION</label>
						<input
							type="text"
							placeholder="gas consumption"
							// value={email}
							//onChange={handleEmailChange}
							value={gasconsumptionswiftasia}
							onChange={(e) => setGasconsumptionswiftasia(e.target.value)}
							className="form-input"
						/>
					</div>
					<div className="form-item">
						<label className="form-label">INPUT GAS CONSUMPTION</label>
						<select
							value={nama_mesin}
							onChange={(e) => setNama_mesin(e.target.value)}
							style={{ width: "300px", height: "38px" }}
							className="form-label"
						>
							<option value="STRIKO1">STRIKO1</option>
							<option value="STRIKO2">STRIKO2</option>
							<option value="STRIKO3">STRIKO3</option>
							<option value="SWIFTASIA">SWIFT ASIA</option>
						</select>
					</div>
					<div className="form-item">
						<label className="form-label">.</label>

						<button type="submit" className="submit-button">
							SUBMIT
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default InputDaily;
