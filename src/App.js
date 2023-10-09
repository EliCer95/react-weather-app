import "./App.css";
import Form from "./Form";
import MainData from "./MainData";
import SecondaryData from "./SecondaryData";

function App() {
  return (
    <div className="App">
      <div className="container border p-3 mt-5 shadow">
        <div clasName="row">
          <Form />
        </div>
        <div className="row">
          <div className="col-6">
            <MainData />
          </div>
          <div className="col-6">
            <SecondaryData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
