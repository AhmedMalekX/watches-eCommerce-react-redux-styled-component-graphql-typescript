import React from "react";
import "./App.css";
import {Navbar} from "./components/navbar/Navbar.component";
import {Hero} from "./components/hero/Hero.component";
import Featured from "./components/featured/Featured.component";
import Story from "./components/story/Story.component";
import Products from "./components/Products/Products.component";
import Testimonial from "./components/testimonial/testimonial.component";
import NewArrivals from "./components/NewArrivals/NewArrivals.component";
import NewsLetter from "./components/NewsLetter/NewsLetter.component";

const App: React.FC = () => {
	return (
		<div className="app">
			<div className="container">
				<Navbar/>
				<Hero/>
				<Featured/>
				<Story/>
				<Products/>
				<Testimonial/>
				<NewArrivals/>
				<NewsLetter/>
			</div>
		</div>
	);
};

export default App;
