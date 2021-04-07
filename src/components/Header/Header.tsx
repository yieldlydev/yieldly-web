import React from "react";
import { useQuery } from "react-query";
import { useWeb3React } from "@web3-react/core";
import { FaTelegram, FaMedium, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo-base.svg";
import Wallet from "../../eth/Wallet";
import { getPrices } from "../../data/queries";
import "./Header.scss";

function Header() {
  const { account, library } = useWeb3React();
  const { data: prices } = useQuery("prices", () => getPrices());
  const { data: network } = useQuery("network", () => library.getNetwork());

  const wrongNetwork = network && network.chainId !== 56;

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
          <a href="https://medium.com/@yieldlydefi" target="_blank" rel="noopener noreferrer">
            <FaMedium />
          </a>
          <a href="https://twitter.com/yieldlydefi" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="prices">
        <div className="price">
          <div>S</div> <span className="price-dollar">${prices ? prices.yldlys : ".."}</span>
          <div className="get-button"></div>
        </div>
        <div className="price">
          <div>I</div> <span className="price-dollar">${prices ? prices.yldlyi : ".."}</span>
        </div>
        <div className="price">
          <div>BNB</div> <span className="price-dollar">${prices ? prices.bnb : ".."}</span>
        </div>
      </div>
      <div className="connect">
        {wrongNetwork && (
          <div className="wrong-network" style={{ fontSize: "10px", fontWeight: "bold", marginRight: "14px" }}>
            Wrong network!
          </div>
        )}
        {account ? `${account.substring(0, 5)}...${account.substring(36, 50)}` : <Wallet />}
      </div>
    </div>
  );
}

export default Header;
