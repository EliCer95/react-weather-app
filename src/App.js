import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <Weather defaultCity="Prague" />
      </div>
      <footer className="footnote">
        This project was coded by{" "}
        <a
          href="https://timely-cascaron-7f0bb7.netlify.app/"
          target="_blank"
          className="link"
        >
          Eliska Cerna
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/EliCer95/react-weather-app/tree/main"
          target="_blank"
          className="link"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
