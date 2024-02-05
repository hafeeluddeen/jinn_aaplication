import { useState } from "react";
import NewTableItem from "./NewTableItem";

const NewTableList = () => {
  //state assignment - starts

  // no of rows
  const [items, setItems] = useState(1);

  //stores total hours per day in a week - starts
  //vertical total value is calculated here
  const [totalHrs, setTotalHrs] = useState([0, 0, 0, 0, 0, 0, 0]);
  //stores total hours per day in a week - ends

  // total of total hours worked all days in a week - starts
  //value in last row final column
  const [totalOftotalCol, settotalOftotalCol] = useState(0);
  // total of total hours worked all days in a week - ends

  //state assignment - ends

  // starts
  const modifyTotHrs = (idx, newVal) => {
    const temp = totalHrs;
    temp[idx] += newVal;

    //finding the value of total of total hours worked all days in a week - starts
    let temp_val = 0;
    temp_val = temp.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    //finding the value of total of total hours worked all days in a week - ends

    setTotalHrs([...temp]);
    settotalOftotalCol(temp_val);
  };
  //ends

  // row delete ahndler

  // row delete handler
  //adding new item to row - starts
  const addRow = () => {
    setItems((old) => old + 1);
  };
  //adding new item to row - ends

  //return starts
  return (
    <div>
      {[...Array(items)].map((e, i) => (
        <NewTableItem modifyTotHrs={modifyTotHrs} index={i} addRow={addRow} />
      ))}
      <tfoot>
        <tr>
          {totalHrs.map((e) => (
            <td>
              <input type="number" value={e} />
            </td>
          ))}

          <td>
            <input type="number" value={totalOftotalCol} readOnly />
          </td>
        </tr>
      </tfoot>
    </div>
  );
  //return ends
};

export default NewTableList;
