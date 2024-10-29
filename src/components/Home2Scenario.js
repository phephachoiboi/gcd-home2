import React from "react";
import "../App.css";
import MainSlider from "./MainSlider";
import AboutUs from "./AboutUs";
import MainServices from "./MainServices";

const Home2Scenario = () => {
  return (
    <main className="flex flex-col m-0 p-0">
      <MainSlider />
      <AboutUs />
      <MainServices />
    </main>
  );
};
export default Home2Scenario;
