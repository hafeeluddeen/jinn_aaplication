import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import InputField from "./InputField";
import "./table.css";

const NewTableItem = ({
  modifyTotHrs,
  index,
  addRow,
  rowDelHandler,
  obj,
  modify,
  key,
  ptype,
  handleTextChange
}) => {
  // A Particular Row in the table
  const taskRow = obj;
  const days = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun", "total"];

  let comment = ""

  //state assignment - starts

  // Total Work Done on a Particular Task and Project in a Day
  const [totalValueTaskRow, setTotalValueTaskRow] = useState(0);

  //state assignment - ends

  // projects
  const projects = [
    { title: "Project 1", code: "p" },
    { title: "Project 2", code: "p" },
    { title: "Project 3", code: "p" },
    { title: "Project 4", code: "p" },
    { title: "Project 5", code: "p" },
  ];

  //tasks
  const tasks = [
    { title: "Task 1", code: "t" },
    { title: "Task 2", code: "t" },
    { title: "Task 3", code: "t" },
    { title: "Task 4", code: "t" },
    { title: "Task 5", code: "t" },
  ];

  //handles changing  horizontal values - starts (Individual task)
  const changeHandler = (e) => {
    const fieldName = e.target.name;

    const fieldValue = Number(e.target.value);
    const currentRow = taskRow;

    const oldValue = taskRow[fieldName];

    for (const property in taskRow) {
      if (property !== fieldName) currentRow[property] = taskRow[property];
    }

    currentRow[fieldName] = fieldValue;
    let updatedValue = fieldValue - oldValue;
    currentRow["total"] = fieldValue - oldValue + taskRow["total"];

    //console.log(temp);

    let idx = 0;
    switch (fieldName) {
      case "mon":
        idx = 0;
        break;
      case "tue":
        idx = 1;
        break;
      case "wed":
        idx = 2;
        break;
      case "thurs":
        idx = 3;
        break;
      case "fri":
        idx = 4;
        break;
      case "sat":
        idx = 5;
        break;
      case "sun":
        idx = 6;
        break;
      case "total":
        idx = 7;
        break;
      default:
        idx = -1; // If the day is not recognized
        break;
    }

    //update Total Work Done in OverAll Week - starts
    modifyTotHrs(idx, updatedValue);
    //update Total Work Done in OverAll Week - ends

    //update the Particular day's row and column total -starts
    modify(currentRow, index);
    //update the Particular day's row and column total - ends
  };
  //handles changing  horizontal values - ends (Individual task)

  //handle project's name , task's name and comment's Changes of the current row - starts
  const textChangeHandler = (e) => {
    let currentRow = taskRow;
    if (e.target.value.code === "p") {
      currentRow["project_name"] = e.target.value.title;
    } else if (e.target.value.code === "t") {
      currentRow["task_name"] = e.target.value.title;
    } else {
      comment = e.target.value
      console.log("comment",comment)
      currentRow["comment"] = comment;
    }

    handleTextChange(currentRow, index);
  };
  //handle project's name , task's name and comment's Changes of the current row - end

  // adding new row to the table - starts
  //using the function passed as an prop "addRow" to add rows to the table -starts
  const new_row = () => {
    addRow();
  };
  //using the function passed as an prop "addRow" to add rows to the table - end

  //delete a row in a table - starts
  //using the function passed as an prop  deleteRow to do the job
  const delHandler = () => {
    rowDelHandler(index);
  };
  //delete a row in a table - ends

  //   style={{ borderBottom: "2px dotted red" }}

  return (
    <tr key={key}>
      <td>{index === 0 ? ptype : ""}</td>
      <td className="border_btm">
        <Dropdown
          style={{color:"black" }}
          options={projects}
          optionLabel="title"
          placeholder={taskRow.project_name}
          onChange={textChangeHandler}
          name="project"
          className="top_three"
        />
      </td>
      <td className="border_btm">
        <Dropdown
          options={tasks}
          optionLabel="title"
          placeholder={taskRow.task_name}
          onChange={textChangeHandler}
          className="top_three"
        />
      </td>
      <td className="border_btm">
        <InputText
          
          onChange={textChangeHandler}
          className="top_three"
        />
      </td>

      {days.map((day, i) => {
        return (
          <td className="border_btm">
            <InputField
              name={day}
              changeHandler={changeHandler}
              value={taskRow[`${day}`]}
            />
          </td>
        );
      })}

      <td className="border_btm" colSpan={2}>
        <button onClick={new_row} className="input_item">
          ADD
        </button>
      </td>
      <td className="border_btm">
        {index !== 0 && (
          <button onClick={delHandler} className="input_item">
            DELETE
          </button>
        )}
      </td>
    </tr>
  );
};

export default NewTableItem;
