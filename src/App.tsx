import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Navbar} from "./components/navbar/Navbar.component";
import {Hero} from "./components/hero/Hero.component";
import Featured from "./components/featured/Featured.component";
import Story from "./components/story/Story.component";
import Products from "./components/Products/Products.component";
import Testimonial from "./components/testimonial/testimonial.component";
import NewArrivals from "./components/NewArrivals/NewArrivals.component";
import NewsLetter from "./components/NewsLetter/NewsLetter.component";
import Footer from "./components/footer/Footer.component";
import {LightTheme} from "./components/themes/LightTheme";
import {DarkTheme} from "./components/themes/DarkTheme";
import {ThemeProvider} from "styled-components";
import {AppWrapper, ContainerWrapper} from "./App.styles";
import Sidebar from "./components/Sidebar/Sidebar.component";

const App: React.FC = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	
	const darkModeStatus = useSelector((state: { darkmode: boolean }) => state.darkmode)
	const themes = {
		light: LightTheme,
		dark: DarkTheme,
	};
	
	return (
		<ThemeProvider theme={darkModeStatus ? themes.dark : themes.light}>
			<AppWrapper>
				<Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
				<Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
				<ContainerWrapper>
					<Hero/>
					<Featured/>
					<Story/>
					<Products/>
					<Testimonial/>
					<NewArrivals/>
					<NewsLetter/>
					<Footer/>
				</ContainerWrapper>
			</AppWrapper>
		</ThemeProvider>
	);
};

export default App;
