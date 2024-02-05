import logo from "./logo.svg";
import "./App.css";
import { InputText } from "primereact/inputtext";

import NewTable from "./Components/New_Table/NewTable";

function App() {
  return (
    <div className="App flex flex-row">
      <div>
        <h1>SIDEBAR</h1>
      </div>
      <div style={{ padding: "10px" }}>
        <div className="flex flex-column">
          <div>
            <div className="flex flex-row ">
              <h1>TimeSheets</h1>
            </div>
          </div>
          <div>
            <NewTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
