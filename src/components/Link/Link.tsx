import React from "react";
import "./Link.scss";

type Props = {
  style?: any;
  children: any;
  className?: string;
  onClick: Function;
};

function Link({ style = {}, className, children, onClick }: Props) {
  return (
    <div className={`link ${className ? className : ""}`} style={style} onClick={() => onClick()}>
      {children}
    </div>
  );
}

export default Link;
