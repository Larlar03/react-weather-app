import "./App.css";
import Weather from "./Weather";
import RepoLink from "./RepoLink";

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
      <Weather defaultCity="Birmingham,GB" />
      <RepoLink />
    </div>
  );
}
