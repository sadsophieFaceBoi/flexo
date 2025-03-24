import React from "react";
import "../../index.css";
export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
    const [value, setValue] = React.useState(0);
  return <button className="bg-red-300 rounded" style={{color:"red"}} onClick={()=>setValue(value+1)}>{props.label} {value}</button>;
};

export default Button;
