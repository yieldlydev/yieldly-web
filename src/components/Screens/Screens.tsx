import React from "react";
import Ecosystem from "./Ecosystem/Ecosystem";
import Farms from "./Farms/Farms";
import Governance from "./Governance/Governance";
import useNavigation from "../../useNavigation";

const Screen: { [key: string]: any } = {
  farming: <Farms />,
  ecosystem: <Ecosystem />,
  governance: <Governance />,
};

function Screens() {
  const [screen] = useNavigation();

  return Screen[screen];
}

export default Screens;
