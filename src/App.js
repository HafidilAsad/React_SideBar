import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import ReportDaily from "./pages/ReportDaily";
import InputCost from "./pages/InputCost";
import ReportCost from "./pages/ReportCost";
import InputDaily from "./pages/InputDaily";
import UtilityCost from "./pages/UtilityCost";
import InputUtilityCost from "./pages/InputUtilityCost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		// <Router>
		<div className="container">
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/analytics" element={<Analytics />} />
				<Route path="/reportdaily" element={<ReportDaily />} />
				<Route path="/inputcost" element={<InputCost />} />
				<Route path="/reportcost" element={<ReportCost />} />
				<Route path="/inputdaily" element={<InputDaily />} />
				<Route path="/utilitycost" element={<UtilityCost />} />
				<Route path="/inpututilitycost" element={<InputUtilityCost />} />
			</Routes>
		</div>
	);
}

export default App;
