import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

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
}) => {
  //state assignment - starts

  const taskRow = obj;

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

  //handles changing  horizontal values - starts (each task)
  const changeHandler = (e) => {
    const fieldName = e.target.name;

    const fieldValue = Number(e.target.value);
    const temp = taskRow;

    const oldValue = taskRow[fieldName];

    for (const property in taskRow) {
      if (property !== fieldName) temp[property] = taskRow[property];
    }

    temp[fieldName] = fieldValue;
    let new_val = fieldValue - oldValue;
    temp["total"] = fieldValue - oldValue + taskRow["total"];

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

    modifyTotHrs(idx, new_val);
    modify(temp, index);
    //console.log(temp);
  };
  //handles changing  horizontal values - ends
  const textChangeHandler = (e) => {
    let temp = taskRow;
    if (e.target.value.code === "p") {
      temp["project_name"] = e.target.value.title;
    } else if (e.target.value.code === "t") {
      temp["task_name"] = e.target.value.title;
    } else {
      console.log(e.target.value);
      temp["comment"] = e.target.value;
    }

    modify(temp, index);
  };

  //handle project, task, comment Changes - starts

  //handle project, task, comment Changes - ends

  // adding new row to the table - starts
  //using the prop function addRow to do the job
  const new_row = () => {
    addRow();
  };
  // adding new row to the table - ends

  //delete row handler - starts

  const delHandler = () => {
    rowDelHandler(index);
  };

  //delete row handler - ends

  //   style={{ borderBottom: "2px dotted red" }}

  return (
    <tr key={key}>
      <td>{index === 0 ? ptype : ""}</td>
      <td className="border_btm">
        <Dropdown
          options={projects}
          optionLabel="Project"
          placeholder="Project"
          value={taskRow.project_name}
          //   onChange={(e) => {
          //     console.log(e);
          //   }}
          onChange={textChangeHandler}
          name="project"
          className="top_three"
        />
      </td>
      <td className="border_btm">
        <Dropdown
          options={tasks}
          optionLabel="Task"
          placeholder="Task"
          style={{ color: "black" }}
          value={taskRow.task_name}
          onChange={textChangeHandler}
          className="top_three"
        />
      </td>

      <td className="border_btm">
        <InputText
          value={taskRow.comment}
          onChange={textChangeHandler}
          className="top_three"
        />
      </td>
      <td className="border_btm">
        <input
          type="number"
          name="mon"
          onChange={changeHandler}
          value={taskRow.mon === 0 ? "" : taskRow.mon}
          className="input_item"
        />
      </td>
      <td className="border_btm">
        <input
          type="number"
          name="tue"
          onChange={changeHandler}
          value={taskRow.tue === 0 ? "" : taskRow.tue}
          className="input_item"
        />
      </td>
      <td className="border_btm">
        <input
          type="number"
          name="wed"
          onChange={changeHandler}
          value={taskRow.wed === 0 ? "" : taskRow.wed}
          className="input_item"
        />
      </td>
      <td className="border_btm">
        <input
          type="number"
          name="thurs"
          onChange={changeHandler}
          value={taskRow.thurs === 0 ? "" : taskRow.thurs}
          className="input_item"
        />
      </td>
      <td className="border_btm">
        <input
          type="number"
          name="fri"
          onChange={changeHandler}
          value={taskRow.fri === 0 ? "" : taskRow.fri}
          className="input_item"
        />
      </td>
      <td className="border_btm">
        <input
          type="number"
          name="sat"
          onChange={changeHandler}
          value={taskRow.sat === 0 ? "" : taskRow.sat}
          className="input_item"
        />
      </td>
      <td className="border_btm">
        <input
          type="number"
          name="sun"
          onChange={changeHandler}
          value={taskRow.sun === 0 ? "" : taskRow.sun}
          className="input_item"
        />
      </td>
      <td className="border_btm">
        <input
          type="number"
          name="total"
          value={taskRow["total"] === 0 ? "" : taskRow["total"]}
          readOnly
          className="input_item"
        />
      </td>
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
