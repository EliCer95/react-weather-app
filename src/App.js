import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <Weather defaultCity="Tokyo" />
      </div>
      <footer className="footnote">Open-source code by Eliska Cerna</footer>
    </div>
  );
}
