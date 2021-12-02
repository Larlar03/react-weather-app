import "./App.css";
import Form from "./Form";
import WeatherCard from "./WeatherCard";
import RepoLink from "./RepoLink";
import ForecastContainer from "./ForecastContainer";

export default function App() {
  function changeBackground() {
    let now = new Date();

    let container = document.querySelector("body");
    let time = now.getHours();
    if (time < 17) {
      container.style.background =
        "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)";
    } else {
      container.style.background =
        "linear-gradient(to right, #8faad2 0%, #ffb1b1 100%)";
    }
  }

  changeBackground();

  return (
    <div id="App">
      <main>
        <div className="row">
          <div className="col-12">
            <Form />
          </div>
        </div>
        <div id="app-container">
          <div className="row">
            <WeatherCard />
          </div>
          <div className="row">
            <ForecastContainer />
          </div>
        </div>
      </main>
      <RepoLink />
    </div>
  );
}
