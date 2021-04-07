import React from "react";
import { useQuery } from "react-query";
import { useWeb3React } from "@web3-react/core";
import { FaTelegram, FaMedium, FaTwitter } from "react-icons/fa";
import { RiRadioButtonLine } from "react-icons/ri";
import logo from "../../assets/logo-base.svg";
import Wallet from "../../eth/Wallet";
import { getPrices } from "../../data/queries";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import "./Header.scss";

function Header() {
  const { account, library } = useWeb3React();
  const { data: prices, isLoading } = useQuery("prices", () => getPrices(library));
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
        <div className="buy-links">
          <a
            href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xdeec7074448d4a126bd2e95a203739f3a5eaa422"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="get-s">Get S</Button>
          </a>
          <a
            href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x250afe9ab9f0542a6c210a8be572b881279f6e00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="get-i">Get I</Button>
          </a>
        </div>
      </div>
      <div className="prices">
        <Loader loading={isLoading} size={25} color="#eb5e28">
          <div className="price">
            <div>S</div> <span className="price-dollar">${prices ? prices.yldlys : ".."}</span>
          </div>
          <div className="get-button"></div>
          <div className="price">
            <div>I</div> <span className="price-dollar">${prices ? prices.yldlyi : ".."}</span>
          </div>
          <div className="price">
            <div>BNB</div> <span className="price-dollar">${prices ? prices.bnb : ".."}</span>
          </div>
        </Loader>
      </div>
      <div className="connect">
        {wrongNetwork && (
          <div className="wrong-network" style={{ fontSize: "10px", fontWeight: "bold", marginRight: "14px" }}>
            Wrong network!
          </div>
        )}
        <div className="account">
          {account ? (
            <>
              <RiRadioButtonLine size="18" style={{ marginRight: "7px" }} />
              <span style={{}}>{account ? `${account.substring(0, 5)}...${account.substring(36, 50)}` : <Wallet />}</span>
            </>
          ) : (
            <Wallet />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
