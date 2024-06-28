import React, { useContext } from "react";
import sectionContext from "../Context/sectionContext";

const Button = ({ name, id, inp, rowData, setRowData }) => {
  const { sectionValue, setSectionValue } = useContext(sectionContext);
  return (
    <button
      onClick={(e) => {
        if (e.target.id.includes("button1")) {
          console.log("button1");
          const val = rowData.value + rowData.value / inp;
          console.log(val);
          const varience_section = Math.abs(
            ((rowData.value / inp / sectionValue[0]) * 100).toFixed(2)
          );
          setRowData({ ...rowData, value: val, varience: `${inp}%` });
          setSectionValue([
            sectionValue[0] - Number(rowData.value) + val,
            varience_section,
          ]);
        } else {
          const varience = Math.abs(
            (((rowData.value - inp) / rowData.value) * 100).toFixed(2)
          );
          const varience_section = Math.abs(
            (((Number(inp) - rowData.value) / sectionValue[0]) * 100).toFixed(2)
          );
          setRowData({ ...rowData, value: inp, varience: `${varience}%` });
          setSectionValue([
            sectionValue[0] - rowData.value + Number(inp),
            varience_section,
          ]);
        }
      }}
      id={`${id}_${name}`}
    >
      {name}
    </button>
  );
};

export default Button;
