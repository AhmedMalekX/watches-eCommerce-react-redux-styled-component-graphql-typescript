import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar.component";
import { Hero } from "./components/hero/Hero.component";
import Featured from "./components/featured/Featured.component";
import Story from "./components/story/Story.component";
import Products from "./components/Products/Products.component";
import Testimonial from "./components/testimonial/testimonial.component";
import NewArrivals from "./components/NewArrivals/NewArrivals.component";
import NewsLetter from "./components/NewsLetter/NewsLetter.component";
import Footer from "./components/footer/Footer.component";
// import { LightTheme } from "./components/themes/LightTheme";
// import { DarkTheme } from "./components/themes/DarkTheme";

const App: React.FC = () => {
  // const themes = {
  //   light: LightTheme,
  //   dark: DarkTheme,
  // };

  // const [theme, setTheme] = useState("light");

  return (
      <div className="app">
        <Navbar />
        <div className="container">
          <Hero />
          <Featured />
          <Story />
          <Products />
          <Testimonial />
          <NewArrivals />
          <NewsLetter />
          <Footer />
        </div>
      </div>
  );
};

export default App;
