import { useState } from "react";

import NewTableList2 from "./TableList";
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from "primereact/accordion";

import "./table.css";

const NewTable = () => {
  //ACTIVITIES AVAILABLE - STARTS

  const activities = ["BAU_Activity", "Sales_Activity"];

  //ACTIVITIES AVAILABLE - ENDS

  // State Assignment - Starts
  

  //total hours spent by the employee in a week
  const [totalWorkDoneInEntireWeek, settotalWorkDoneInEntireWeek] = useState(0);

  //total hours of work done by an employee in a particular day in a week
  const [
    workDoneInParticularDayInEntireWeek,
    setworkDoneInParticularDayInEntireWeek,
  ] = useState([0, 0, 0, 0, 0, 0, 0]);

  // State Assignment - ends
const [centralData,setCentralData] = useState([])

  const updateCentralData = (obj,ptype) =>{
    //console.log("+++++++++++",ptype)
     if(ptype === "BAU_Activity"){

      const cc = centralData[1]
      console.log("++++++",centralData)
      console.log("----------",obj)
     
      setCentralData(old => [obj,cc])

     }
     else{
      const cc = centralData[0]

      setCentralData(old => [cc,obj])

     }
      console.log(centralData)
   
       
    }



  //update the value of totalWorkDoneInEntireWeek (STATE VARIABLE) - starts
  const changeTotalHoursHandler = (val) => {
    settotalWorkDoneInEntireWeek((old) => old + val);
  };
  //update the value of totalWorkDoneInEntireWeek (STATE VARIABLE) - end

  // update the value of setworkDoneInParticularDayInEntireWeek (STATE VARIABLE) - starts
  const changeColTotalHoursHandler = (old_arr, new_arr) => {
    //old_arr - value before update
    //new_Arr - value after update
    //old_Arr - new_Arr value that needs to be added
    let temp_arr = [...workDoneInParticularDayInEntireWeek];

    //loop - starts
    //since there are 7 days in a week i runs from 0 to 6
    for (let i = 0; i < 7; i++) {
      temp_arr[i] = temp_arr[i] - old_arr[i] + new_arr[i];
    }
    //loop - ends

    setworkDoneInParticularDayInEntireWeek([...temp_arr]);
  };
  // update the value of setworkDoneInParticularDayInEntireWeek (STATE VARIABLE) - starts

  return (
    <div className="flex flex-column">
      {/* total hours and date */}
      <div>
        <div className="flex flex-ro justify-content-between">
          <div className="total_hours">
            <h3>Total Hours : {totalWorkDoneInEntireWeek}</h3>
          </div>
          <div className="date">
            <h3>&lt; 25 Dec 2023 - 31 Dec 2023 &gt;</h3>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Accordion activeIndex={0} style={{ padding: "0px" }}>
          <AccordionTab header="Allocation Extension">
            <table style={{ width: "100%" }}>
              <tr style={{ width: "100%" }}>
                <th style={{ padding: "10px" }}>Project Name</th>
                <th>Project Type</th>
                <th>Project End Date</th>
                <th>Allocation end date</th>
                <th>Allocation extension</th>
              </tr>
              <tr
                className="flex flex-row justify-content-center"
                style={{ textAlign: "center" }}
              >
                <td colSpan="5">No Projects Yet</td>
              </tr>
            </table>
          </AccordionTab>
        </Accordion>
      </div>
      {/* table and Timesheets title */}
      <div>
        <div className="flex flex-column">
          <div className="flex flex-row align-tems-start hell">
            <h4 style={{ padding: "5px" }}>Timesheets</h4>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th style={{ padding: "10px" }}>PROJECT TYPE</th>
                  <th style={{ padding: "10px" }}>PROJECT NAME</th>
                  <th>TASK</th>
                  <th>COMMENT</th>
                  <th>MON</th>
                  <th>TUE</th>
                  <th>WED</th>
                  <th>THU</th>
                  <th>FRI</th>
                  <th>SAT</th>
                  <th>SUN</th>
                  <th>Total</th>
                  <th colSpan={2}></th>
                  <th></th>
                </tr>
              </thead>

              {activities.map((activity, idx) => (
                <NewTableList2
                  key={idx}
                  changeTotalHoursHandler={changeTotalHoursHandler}
                  changeColTotalHoursHnadler={changeColTotalHoursHandler}
                  ptype={activity}
                  className="bb"
                  sendTasks = {updateCentralData}
                />
              ))}

                 

              <tfoot>
                <tr>
                  <td>TOTAL HOURS</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {workDoneInParticularDayInEntireWeek.map((item) => (
                    <td>
                      <p className={item > 9 ? "warn" : ""}>{item}</p>
                    </td>
                  ))}
                  <td>
                    <p className={totalWorkDoneInEntireWeek > 40 ? "warn" : ""}>
                      {totalWorkDoneInEntireWeek}
                    </p>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* submit and save button */}

      <div>
        <div className="flex flex-row-reverse">
          <button className="input_item" style={{ margin: "5px" }}>
            SUBMIT
          </button>

          <button className="input_item" style={{ margin: "5px" }}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTable;
