import "./App.css";
import Header from "./components/Header";
import Home2Scenario from "./components/Home2Scenario";
import BackgroundSlider from "../src/assets/images/BackgroundSlider.png";

function App() {
  return (
    <div className="App">
      <div className="home2">
        <div
          className="relative max-w-[1440px] w-full h-[918px] bg-cover object-cover z-[0]"
          style={{ backgroundImage: `url(${BackgroundSlider})` }}
        >
          <Header />
          <Home2Scenario />
        </div>
      </div>
    </div>
  );
}

export default App;
