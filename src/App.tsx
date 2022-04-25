import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar.component";
import { Hero } from "./components/hero/Hero.component";
import Featured from "./components/featured/Featured.component";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <Hero />
        <Featured />
      </div>
    </div>
  );
};

export default App;
