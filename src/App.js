import logo from "./logo.svg";
import "./App.css";
import { InputText } from "primereact/inputtext";

import NewTable from "./Components/Table/Table";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="App flex flex-row">
      <div>
        <SideBar />
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
