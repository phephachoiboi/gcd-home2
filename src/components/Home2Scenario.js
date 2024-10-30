import React from "react";
import "../App.css";
import MainSlider from "./MainSlider";
import AboutUs from "./AboutUs";
import MainServices from "./MainServices";
import WhyChoosingUs from "./WhyChoosingUs";
import TheBlog from "./TheBlog";
import RequestCallServices from "./RequestCallServices";

const Home2Scenario = () => {
  return (
    <main className="flex flex-col m-0 p-0">
      <MainSlider />
      <AboutUs />
      <MainServices />
      <WhyChoosingUs />
      <TheBlog />
      <RequestCallServices />
    </main>
  );
};
export default Home2Scenario;
