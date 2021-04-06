import React from "react";
import { useWeb3React } from "@web3-react/core";
import { FaTelegram } from "react-icons/fa";
import logo from "../../assets/logo-base.svg";
import Wallet from "../../eth/Wallet";
import "./Header.scss";
import Link from "../Link/Link";

function Header() {
  const { account } = useWeb3React();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} width="48" height="48" alt="Yieldly" />
        <span className="header-logo-text">
          yieldly <span style={{ fontSize: "8px" }}>beta</span>
        </span>
        <div className="social">
          <a href="https://t.me/yieldlyofficial">
            <FaTelegram />
          </a>
        </div>
      </div>
      <div className="prices">
        <div className="price">
          <div>YLDLY-S</div> <span className="price-dollar">$4.14</span>
          <div className="get-button"></div>
        </div>
        <div className="price">
          <div>YLDLY-I</div> <span className="price-dollar">$4.14</span>
        </div>
        <div className="price">
          <div>BNB</div> <span className="price-dollar">$394.87</span>
        </div>
      </div>
      <div className="connect">{account ? `${account.substring(0, 5)}...${account.substring(36, 50)}` : <Wallet />}</div>
    </div>
  );
}

export default Header;
