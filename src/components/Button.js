import React from "react";
const Button = ({ onClick, displayText }) => {
  return (
    <button className="addNewButton" type="button" onClick={onClick}>
      {displayText}
    </button>
  );
};

export default Button;
