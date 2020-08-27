import React from "react";

const Button = (props) => {
  return <button onClick={props.task}>{props.buttonName}</button>;
};

export default Button;
