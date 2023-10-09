import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  function showWeather(response) {
    alert(response.data.main.temp);
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=5af297a6d7993b7bb3c2ec51eeeaccd4&units=metric`;
  axios.get(apiUrl).then(showWeather);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello to coding
        </a>
      </header>
    </div>
  );
}

export default App;
