import React from "react";
import "./Card.scss";

type Props = {
  color?: string;
  className?: string;
  children: any;
};

function Card({ className, color, children }: Props) {
  return (
    <div className={`card ${className ? className : ""}`} style={color ? { backgroundColor: color } : {}}>
      {children}
    </div>
  );
}

export default Card;
