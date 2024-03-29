import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <Weather defaultCity="Prague" />
      </div>
      <div className="col">
        <footer className="footnote">
          This project was coded by{" "}
          <a
            href="https://www.eliskacerna.com/"
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            Eliska Cerna
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/EliCer95/react-weather-app/tree/main"
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
