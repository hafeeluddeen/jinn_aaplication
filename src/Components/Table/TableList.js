import { useEffect, useState } from "react";
import NewTableItem from "./TableItem";
import { InputText } from "primereact/inputtext";

const NewTableList2 = ({
  changeTotalHoursHandler,
  changeColTotalHoursHnadler,
  ptype,
  sendTasks
}) => {


  //state assignment - starts
  // no of rows
  const [items, setItems] = useState(0);

  //stores total hours per day in a week - starts
  //vertical total value is calculated here
  const [totalHrs, setTotalHrs] = useState([0, 0, 0, 0, 0, 0, 0]);
  //stores total hours per day in a week - ends

  // total of total hours worked all days in a week - starts
  //value in last row final column
  const [totalOftotalCol, settotalOftotalCol] = useState(0);
  // total of total hours worked all days in a week - ends

  const [tasks, setTasks] = useState([
    {
      project_name: "",
      task_name: "",
      comment: "",
      mon: 0,
      tue: 0,
      wed: 0,
      thurs: 0,
      fri: 0,
      sat: 0,
      sun: 0,
      total: 0,
      idx: 0,
      ptype:{ptype}
    },
  ]);

  const setCentralData = () =>{
    sendTasks(tasks,ptype)
  }

  //state assignment - ends

  // starts
  const modifyTotHrs = (idx, newVal) => {
    const temp = [...totalHrs];
    temp[idx] += newVal;

    //finding the value of total of total hours worked all days in a week - starts
    let temp_val = 0;
    temp_val = temp.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    //old array and updated one
    changeColTotalHoursHnadler(totalHrs, temp);
    //finding the value of total of total hours worked all days in a week - ends

    setTotalHrs([...temp]);
    changeTotalHoursHandler(temp_val - totalOftotalCol);
    settotalOftotalCol(temp_val);
    console.log(tasks)

    setCentralData()
  };
  //ends

  // row delete handler - starts
  const rowDelHandler = (idx) => {
    //console.log("DELETE HANDLER IS CLICKED", idx);
    //idx property has really nothing to do with actual idex of task in the array
    let objToBeDeleted;
    const filtered_rows = tasks.filter((obj, i) => {
      //console.log(i);
      if (obj.idx !== idx) return true;
      else objToBeDeleted = obj;
      return false;
    });
    console.log("OBJ TO BE DELETED " ,objToBeDeleted);

    // the values of the row that has to be deleted are being removed from the vertical total hrs - starts
    let new_total = [...totalHrs];

    const days = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"];

    for (let i = 0; i < 7; i++) new_total[i] -= objToBeDeleted[days[i]];

    //const temp = [...new_total];
    //finding the value of total of total hours worked all days in a week - starts
    let totalHoursWorkedInAWeek = 0;
    totalHoursWorkedInAWeek = new_total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    changeTotalHoursHandler(totalHoursWorkedInAWeek - totalOftotalCol);
    settotalOftotalCol(totalHoursWorkedInAWeek);
    // the values of the row that has to be deleted are being removed from the vertical total hrs - ends

    let needed_to_add = [0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < 7; i++) {
      needed_to_add[i] = new_total[i] - totalHrs[i];
    }

    // updating row values includes both total in horizontal and individual tasks - starts
    changeColTotalHoursHnadler(totalHrs, new_total);

    setTotalHrs(new_total);

    setTasks([...filtered_rows]);

    // updating row values includes both total in horizontal and individual tasks - ends
    console.log("deleteed" , tasks)
    setCentralData()
  };

  // row delete handler -ends

  //adding new item to row - starts
  const addRow = (task) => {
    // console.log("BEFORE ADDING ", tasks, items);

    setTasks((old) => [
      ...old,
      {
        mon: 0,
        tue: 0,
        wed: 0,
        thurs: 0,
        fri: 0,
        sat: 0,
        sun: 0,
        total: 0,
        idx: items + 1,
        ptype:{ptype}
      },
    ]);

    setItems((old) => old + 1);
    console.log("ADDING ROW",tasks)
    setCentralData()
  };
  //adding new item to row - ends

  //modify row numbers..
  // update the values when the rows are being modified ie(rowTotal, colTotal,TotalHrsinAWeek) - starts
  const modify = (obj, idx) => {
    const temp = tasks;

    const filtered_rows = tasks.filter((o, i) => {
      return o.idx !== idx;
    });

    const searchIndex = tasks.findIndex((task) => task.id === idx);
    temp[searchIndex] = obj;
    //change
    // setTasks((old) => [...filtered_rows, temp]);
    setTasks([...temp]);

    console.log("UPDATED",tasks)
    setCentralData()
  };


  
  // update the values when the rows are being modified ie(rowTotal, colTotal,TotalHrsinAWeek) - end
  //return starts
  return (
    <>
      {tasks.map((obj) => (
        // <td>
        <NewTableItem
          modifyTotHrs={modifyTotHrs}
          index={obj.idx}
          addRow={addRow}
          rowDelHandler={rowDelHandler}
          obj={obj}
          modify={modify}
          key={obj.idx}
          ptype={ptype}
          handleTextChange={modify}
        />
        // </td>
      ))}
    </>
  );
  //return ends
};

export default NewTableList2;
