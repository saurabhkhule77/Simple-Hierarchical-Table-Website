import React from "react";
const Input = ({ id, inp, setInp }) => {
  return (
    <input
      onChange={(e) => {
        setInp(e.target.value);
      }}
      value={inp}
      id={id}
      type="text"
    />
  );
};

export default Input;
