import React from "react";
import { BsGearWideConnected, BsQuestionCircleFill, BsExclamationTriangle } from "react-icons/bs";
import useNavigation from "../../useNavigation";
import "./Sidemenu.scss";

const menuItems: any = [
  ["ecosystem", BsQuestionCircleFill, false],
  ["farming", BsGearWideConnected, false],
  ["governance", BsExclamationTriangle, false],
  ["swap", BsExclamationTriangle, true],
  ["lottery", BsExclamationTriangle, true],
  ["bridge", BsExclamationTriangle, true],
];

function Sidemenu() {
  const [screen, setScreen] = useNavigation();
  return (
    <div className="sidemenu">
      <div className="sidemenu-items">
        {menuItems.map(([item, Icon, disabled]: any) => (
          <div className={`sidemenu-item ${disabled ? "disabled" : ""} ${screen === item ? "active" : ""}`} onClick={() => setScreen(item)}>
            <Icon style={{ paddingRight: "10px" }} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidemenu;
