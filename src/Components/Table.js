import React, { useContext, useState } from "react";
import tableContex from "../Context/tableContext";
import RowSection from "./RowSection";

const Table1 = () => {
  const [rowData, setRowData] = useState();
  const { data } = useContext(tableContex);
  if (!data) return;
  return (
    <>
      <div className="container">
        <table>
          <tr>
            <th>Label</th>
            <th>Value</th>
            <th>Input</th>
            <th>Allocation %</th>
            <th>Allocation Val</th>
            <th>Variance %</th>
          </tr>
          {data.map((item, index) => (
            <>
              <RowSection key={item.label} data={item} />
            </>
          ))}
        </table>
      </div>
    </>
  );
};

export default Table1;
