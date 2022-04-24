import React from "react";
import "./App.css";
import {Navbar} from "./components/navbar/Navbar.component";
import {Hero} from "./components/hero/Hero.component";

const App: React.FC = () => {
	return (
		<div className="app">
			<div className="container">
			<Navbar/>
				<Hero/>
			</div>
		</div>
	);
};

export default App;
