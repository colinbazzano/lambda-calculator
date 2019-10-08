import React from "react";
import { tsPropertySignature } from "@babel/types";
import styled from 'styled-components';

const NumberButton = (props) => {
  return (
    <StyledButton className="number_button">
      {props.number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  height: 75px;
  width: 75px;
  border-radius: 80%;
  font-size: 40px;`

export default NumberButton;