import React from "react";
import "./Button.scss";

type Props = {
  handler?: Function;
  children: any;
  color?: string;
};

function Button({ children, handler, color }: Props) {
  return (
    <div className="button" style={color ? { backgroundColor: color } : {}} onClick={() => handler && handler()}>
      {children}
    </div>
  );
}

export default Button;
