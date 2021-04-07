import React from "react";
import "./Button.scss";

type Props = {
  handler?: Function;
  children: any;
  color?: string;
  className?: string;
};

function Button({ children, handler, color, className }: Props) {
  return (
    <div
      className={`button ${className ? className : ""}`}
      style={color ? { backgroundColor: color } : {}}
      onClick={() => handler && handler()}
    >
      {children}
    </div>
  );
}

export default Button;
