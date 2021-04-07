import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderSizeMarginProps } from "react-spinners/interfaces";

type Props = {
  loading: boolean;
  children: any;
} & LoaderSizeMarginProps;

function Loader({ loading, children, ...rest }: Props) {
  if (loading) {
    return (
      <div style={{ margin: "4px" }}>
        <ClipLoader {...rest} />
      </div>
    );
  }
  return children;
}

export default Loader;
