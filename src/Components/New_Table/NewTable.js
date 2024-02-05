import { useState } from "react";
import NewTableList from "./ignore";
import NewTableList2 from "./NewTableList2";
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from "primereact/accordion";

import "./table.css";

const NewTable = () => {
  const [totalHours, setTotalHours] = useState(0);

  const [colTotals, setColTotals] = useState([0, 0, 0, 0, 0, 0, 0]);

  const changeTotalHoursHandler = (val) => {
    setTotalHours((old) => old + val);
  };

  const changeColTotalHoursHandler = (old_arr, new_arr) => {
    console.log("+++++++++++", old_arr, new_arr, "+++++++++++++++");
    let temp_arr = colTotals;
    for (let i = 0; i < 7; i++) {
      temp_arr[i] = temp_arr[i] - old_arr[i] + new_arr[i];
    }
    console.log(temp_arr);
    setColTotals([...temp_arr]);
  };

  return (
    <div className="flex flex-column">
      {/* total hours and date */}
      <div>
        <div className="flex flex-ro justify-content-between">
          <div className="total_hours">
            <h3>{totalHours}</h3>
          </div>
          <div className="date">
            <h3>&lt; 25 Dec 2023 - 31 Dec 2023 &gt;</h3>
          </div>
        </div>
      </div>
      <div>
        <Accordion activeIndex={0}>
          <AccordionTab header="Header I">
            <table style={{ width: "100%" }}>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </table>
          </AccordionTab>
        </Accordion>
      </div>
      {/* table and Timesheets title */}
      <div>
        <div className="flex flex-column">
          <div className="flex flex-row align-tems-start">
            <h4>Timesheets</h4>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th style={{ padding: "10px" }}>PROJECT TYPE</th>
                  <th style={{ padding: "10px" }}>PROJECT NAME</th>
                  <th>TASK</th>
                  <th>NAME</th>
                  <th>MON</th>
                  <th>TUE</th>
                  <th>WED</th>
                  <th>THU</th>
                  <th>FRI</th>
                  <th>SAT</th>
                  <th>SUN</th>
                  <th>Total</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <NewTableList2
                key="1"
                changeTotalHoursHandler={changeTotalHoursHandler}
                changeColTotalHoursHnadler={changeColTotalHoursHandler}
                ptype="BAU Activity"
                className="bb"
              />

              <NewTableList2
                key="2"
                changeTotalHoursHandler={changeTotalHoursHandler}
                changeColTotalHoursHnadler={changeColTotalHoursHandler}
                ptype="Sales Activity"
              />
              <tfoot>
                <tr>
                  <td>TOTAL HOURS</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {colTotals.map((item) => (
                    <td>
                      <p className={item > 9 ? "warn" : ""}>{item}</p>
                    </td>
                  ))}
                  <td>
                    <p className={totalHours > 40 ? "warn" : ""}>
                      {totalHours}
                    </p>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTable;
