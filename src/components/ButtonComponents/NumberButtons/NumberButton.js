import React from "react";
import { tsPropertySignature } from "@babel/types";
const NumberButton = (props) => {
  return (
    <button className="number_button" onClick={() => props.number()}>
      {props.number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;