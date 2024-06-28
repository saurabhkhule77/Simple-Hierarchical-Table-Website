import React, { useContext, useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import sectionContext from "../Context/sectionContext";
const TopRow = ({ data }) => {
  const { sectionValue } = useContext(sectionContext);

  const [rowData, setRowData] = useState(data);
  const [inp, setInp] = useState("");

  return (
    <>
      <tr>
        <td>{rowData?.label}</td>
        <td>{sectionValue[0]}</td>
        <td>
          <Input inp={inp} setInp={setInp} id={rowData?.id} />
        </td>
        <td>
          <Button
            rowData={rowData}
            setRowData={setRowData}
            inp={inp}
            setInp={setInp}
            id={rowData?.id}
            name={"button1"}
          />
        </td>
        <td>
          <Button
            rowData={rowData}
            setRowData={setRowData}
            inp={inp}
            setInp={setInp}
            id={rowData?.id}
            name={"button2"}
          />
        </td>
        <td>{`${sectionValue[1]}%`}</td>
      </tr>
    </>
  );
};

export default TopRow;
