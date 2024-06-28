import React, { useState } from "react";
import Row from "./Row";
import sectionContext from "../Context/sectionContext";
import TopRow from "./TopRow";

const RowSection = ({ data }) => {
  const [sectionValue, setSectionValue] = useState([data.value, 0]);

  return (
    <sectionContext.Provider value={{ sectionValue, setSectionValue }}>
      <TopRow
        data={{
          id: data.id,
          label: data.label,
          value: sectionValue,
          varience: "0%",
        }}
      />
      {data.children.map((item, index) => (
        <Row
          key={item.label}
          data={{
            id: item.id,
            label: `--${item.label}`,
            value: item.value,
            varience: "0%",
          }}
          setSectionValue={setSectionValue}
        />
      ))}
    </sectionContext.Provider>
  );
};

export default RowSection;
