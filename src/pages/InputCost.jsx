import React, { useState } from "react";
import axios from "axios";
import "../css/inputcost.css";
import {
	NotificationManager,
	NotificationContainer,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const InputCost = () => {
	const [biaya_normal, setBiaya] = useState("");
	const [biaya_surcharge, setBiayasurcharge] = useState("");
	const [biaya_normalRp, setBiayaRp] = useState("");
	const [biaya_surchargeRp, setBiayasurchargeRp] = useState("");
	const [bulan, setBulan] = useState("Januari");
	//const [status, setStatus] = useState("");

	//const navigate = useNavigate();

	function formatBiaya(e) {
		let input = e.target.value.replace(/\D/g, ""); // Hapus semua karakter selain digit
		input = Number(input).toLocaleString("id-ID"); // Format angka dengan tanda titik sebagai pemisah ribuan
		setBiaya(input);
	}

	function formatBiayaSurcharge(e) {
		let input = e.target.value.replace(/\D/g, ""); // Hapus semua karakter selain digit
		input = Number(input).toLocaleString("id-ID"); // Format angka dengan tanda titik sebagai pemisah ribuan
		setBiayasurcharge(input);
	}

	function formatBiayaRp(e) {
		let input = e.target.value.replace(/\D/g, ""); // Hapus semua karakter selain digit
		input = Number(input).toLocaleString("id-ID"); // Format angka dengan tanda titik sebagai pemisah ribuan
		setBiayaRp(input);
	}

	function formatBiayaSurchargeRp(e) {
		let input = e.target.value.replace(/\D/g, ""); // Hapus semua karakter selain digit
		input = Number(input).toLocaleString("id-ID"); // Format angka dengan tanda titik sebagai pemisah ribuan
		setBiayasurchargeRp(input);
	}

	const saveCost = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/addcost", {
				biaya_normal,
				biaya_surcharge,
				biaya_normalRp,
				biaya_surchargeRp,
				bulan,
			});
			//setStatus("success");
			NotificationManager.success("Data berhasil disimpan", "Sukses", 2000);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		// <form className="label1" onSubmit={saveCost}>
		// 	<label>NRP</label>
		// 	<br></br>
		// 	<input
		// 		type="text"
		// 		name="username"
		// 		// value={inputs.username || ""}
		// 		// onChange={handleChange}
		// 	/>
		// 	<br></br>

		// 	<label>Biaya Normal (USD)</label>
		// 	<br></br>
		// 	<input
		// 		type="text"
		// 		name="biaya1"
		// 		value={biaya_normal || ""}
		// 		onChange={(e) => setBiaya(e.target.value)}
		// 		// placeholder="Biaya Normal in USD"
		// 	/>
		// 	<br></br>
		// 	<label>Biaya Surcharge (USD)</label>
		// 	<br></br>
		// 	<input
		// 		type="text"
		// 		name="biaya2"
		// 		value={biaya_surcharge || ""}
		// 		onChange={(e) => setBiayasurcharge(e.target.value)}
		// 	/>
		// 	<br></br>
		// 	<label>Biaya Normal (RP)</label>
		// 	<br></br>
		// 	<input
		// 		type="text"
		// 		name="biaya3"
		// 		value={biaya_normalRp || ""}
		// 		onChange={(e) => setBiayaRp(e.target.value)}
		// 	/>
		// 	<br></br>
		// 	<label>Biaya Surcharge (RP)</label>
		// 	<br></br>
		// 	<input
		// 		type="text"
		// 		name="biaya4"
		// 		value={biaya_surchargeRp || ""}
		// 		onChange={(e) => setBiayasurchargeRp(e.target.value)}
		// 	/>
		// 	<div className="field">
		// 		<label className="label">Bulan</label>
		// 		<div className="select" style={{ width: "200px" }}>
		// 			<div className="customselect">
		// 				<select value={bulan} onChange={(e) => setBulan(e.target.value)}>
		// 					<option value="Januari">Januari</option>
		// 					<option value="Februari">Februari</option>
		// 					<option value="Maret">Maret</option>
		// 					<option value="April">April</option>
		// 					<option value="Mei">Mei</option>
		// 					<option value="Juni">Juni</option>
		// 					<option value="Juli">Juli</option>
		// 					<option value="Agustus">Agustus</option>
		// 					<option value="September">September</option>
		// 					<option value="Oktober">Oktober</option>
		// 					<option value="November">November</option>
		// 					<option value="Desember">Desember</option>
		// 				</select>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<br />
		// 	<div className="field">
		// 		<button type="submit" className="button_submit">
		// 			Save Cost
		// 		</button>
		// 	</div>
		// </form>

		<form onSubmit={saveCost}>
			<div>
				<h3 className="title-form"> FORM UNTUK COST PERBULAN</h3>
			</div>
			<div className="form-container">
				<div className="form-item">
					<label className="form-label">NRP</label>
					<input
						type="text"
						placeholder="masukan nomer NRP"
						// value={email}
						//onChange={handleEmailChange}
						className="form-input"
					/>
				</div>
				<div className="form-item">
					<label className="form-label">BIAYA NORMAL USD</label>
					<input
						type="text"
						placeholder="dalam $(USD)"
						value={biaya_normal}
						onChange={formatBiaya}
						className="form-input"
					/>
				</div>
				<div className="form-item">
					<label className="form-label">BIAYA SURCHARGE USD</label>
					<input
						type="text"
						placeholder="dalam $(USD)"
						value={biaya_surcharge}
						onChange={formatBiayaSurcharge}
						className="form-input"
					/>
				</div>
				<div className="form-item">
					<label className="form-label">BIAYA NORMAL RP</label>
					<input
						type="text"
						placeholder="dalam rupiah"
						value={biaya_normalRp}
						onChange={formatBiayaRp}
						className="form-input"
					/>
				</div>

				<div className="form-item">
					<label className="form-label">BIAYA SURCHARGE RP</label>
					<input
						type="text"
						placeholder="dalam rupiah"
						value={biaya_surchargeRp || ""}
						onChange={formatBiayaSurchargeRp}
						className="form-input"
					/>
				</div>
				<br />
			</div>
			<br />
			<div className="container">
				<label className="form-label">PILIH BULAN</label>
			</div>
			<div className="container" style={{ width: "20px", heigh: "50px" }}>
				<select
					className=""
					value={bulan}
					onChange={(e) => setBulan(e.target.value)}
					style={{ width: "300px", heigh: "400px" }}
				>
					<option value="Januari">Januari</option>
					<option value="Februari">Februari</option>
					<option value="Maret">Maret</option>
					<option value="April">April</option>
					<option value="Mei">Mei</option>
					<option value="Juni">Juni</option>
					<option value="Juli">Juli</option>
					<option value="Agustus">Agustus</option>
					<option value="September">September</option>
					<option value="Oktober">Oktober</option>
					<option value="November">November</option>
					<option value="Desember">Desember</option>
				</select>
			</div>
			<br />
			<div className="container">
				<br />
				<button type="submit" className="submit-button">
					Submit
				</button>
			</div>
			<NotificationContainer />
		</form>
	);
};

export default InputCost;
