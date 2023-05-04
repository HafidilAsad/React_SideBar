import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import Clock from "../Clock";
import CurrentDate from "../CurrentDate";

const Sidebar = () => {
	const [show, setShow] = useState(false);

	return (
		<main className={show ? "space-toggle" : null}>
			<header className={`header ${show ? "space-toggle" : null}`}>
				<div className="header-toggle" onClick={() => setShow(!show)}>
					<i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
				</div>
				<Navbar bg="light" expand="lg" className="justify-content-center">
					<Container>
						<span className="textmonitoringgas">
							<h1 className="textmonitoringgas">MONITORING GAS LNG</h1>
						</span>
					</Container>
				</Navbar>
				<div className="container">
					<div className="textclock">
						<CurrentDate />
					</div>
					<div className="textclock">
						<Clock />
					</div>
				</div>
			</header>

			<aside className={`sidebar ${show ? "show" : null}`}>
				<nav className="nav">
					<div>
						<Link to="/" className="nav-logo">
							<i className={`fas fa-home-alt nav-logo-icon`}></i>
							<span className="nav-logo-name">Homepage</span>
						</Link>

						<div className="nav-list">
							<Link to="/dashboard" className="nav-link active">
								<i className="fas fa-tachometer-alt nav-link-icon"></i>
								<span className="nav-link-name">Dashboard</span>
							</Link>
							<Link to="/analytics" className="nav-link">
								<i className="fa-solid fa-chart-line"></i>
								<span className="nav-link-name">Analytic</span>
							</Link>
							<Link to="/reportdaily" className="nav-link">
								<i className="fa-sharp fa-solid fa-clipboard"></i>
								<span className="nav-link-name">Report Daily</span>
							</Link>
							<Link to="/inputcost" className="nav-link">
								<i className="fas fa-dollar-sign nav-link-icon"></i>
								<span className="nav-link-name">Input Cost</span>
							</Link>
							<Link to="/reportcost" className="nav-link">
								<i className="fa-sharp fa-solid fa-clipboard"></i>
								<span className="nav-link-name">Report Cost</span>
							</Link>
							<Link to="/utilitycost" className="nav-link">
								<i className="fa-solid fa-chart-line"></i>
								<span className="nav-link-name">Utility Cost</span>
							</Link>
							<Link to="/inpututilitycost" className="nav-link">
								<i className="fas fa-dollar-sign nav-link-icon"></i>
								<span className="nav-link-name">Input Utility </span>
							</Link>
							<Link to="/inputdaily" className="nav-link">
								<i className="fa-sharp fa-solid fa-clipboard"></i>
								<span className="nav-link-name">Input Daily</span>
							</Link>
						</div>
					</div>

					<Link to="/logout" className="nav-link">
						<i className="fas fa-sign-out nav-link-icon"></i>
						<span className="nav-link-name">Logout</span>
					</Link>
				</nav>
			</aside>
		</main>
	);
};

export default Sidebar;
