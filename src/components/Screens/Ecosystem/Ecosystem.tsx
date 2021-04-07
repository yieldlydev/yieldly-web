import React from "react";
import Card from "../../Card/Card";
import logo from "../../../assets/logo-base.svg";
import yldlysdist from "../../../assets/yldly-s-dist.png";
import yldlyidist from "../../../assets/yldly-i-dist.png";
import Content from "../../Content/Content";
import "./Ecosystem.scss";

function Ecosystem() {
  return (
    <Content title="Ecosystem">
      <div className="ecosystem">
        <Card className="overview">
          <h3 style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} width="80" height="80" alt="Yieldly" />
            What is Yieldly?
          </h3>
          <p>
            Yieldly is a decentralized application focusing on providing its users a variety of cross-chain DeFi-services. <br />
            Initially we will be launching with a two-token system and our liquidity mining infrastructure on the Binance Smart Chain. Our
            main focus is on expanding the core protocol interoperability to the following EVM-chains:
            <ul>
              <li>Moonbeam (Polkadot)</li>
              <li>Mainnet (Ethereum)</li>
              <li>Polygon (Ethereum)</li>
            </ul>
          </p>
          <h4>Products</h4>
          <p>
            Initially Yieldly is focusing the development on three main products.
            <ul>
              <li>Cross-chain DEX leveraging liquidity from other protocols like Bancor, Sushiswap, Pancakeswap</li>
              <li>Cross-chain reflective token</li>
              <li>Cross-chain yield aggregation</li>
            </ul>
          </p>
          <h4>Liquidity mining</h4>
          <p>
            Yieldlys liquidity mining e†vent will distribute the token supply to its users as a reward for participation in the project
            launch.
          </p>
          <p>Liquidity mining event includes the following distribution</p>
          <ul>
            <li>7,250,000 YLDLY-S tokens</li>
            <li>6,000,000 YLDLY-I tokens</li>
          </ul>
          <p>There are a few important properties which users should know before taking part in the event:</p>
          <h4>Reflections</h4>
          <p>
            By staking in the contract stakers will also receive additional rewards through the reflections and by the automatic inflation
            the whole liquidity mining allocation gets from the network transactions.
          </p>
          <h4>Yield multipliers</h4>
          <p>
            Yieldly uses a novel mechanic of increasing user yields by several mechanisms, these include:
            <ul>
              <li>Holding YLDLY-S</li>
              <li>Purchasing a multiplier with various tokens. (eg. YLDLY-I)</li>
              <li>Timelocking your deposit for an epoch (two weeks)</li>
            </ul>
            <h5>YLDLY-S multiplier breakdown</h5>
            <ul>
              <li>5% stake multiplier - 500 YLDLY-S</li>
              <li>10% stake multiplier - 1000 YLDLY-S</li>
              <li>20% stake multiplier - 2000 YLDLY-S</li>
              <li>30% stake multiplier - 4000 YLDLY-S</li>
              <li>40% stake multiplier - 8000 YLDLY-S</li>
            </ul>
            <h5>Spendable multiplier breakdown</h5>
            <ul>
              <li>5% stake multiplier - DYNAMIC</li>
              <li>10% stake multiplier - DYNAMIC</li>
              <li>15% stake multiplier - DYNAMIC</li>
              <li>25% stake multiplier - DYNAMIC</li>
            </ul>
            <h5>Timelocking multiplier breakdown</h5>
            <ul>
              <li>25% stake multiplier - epoch timelock (~14 days)</li>
            </ul>
            <p>
              All multipliers are additive so purchasing eg. two 5% stake multipliers and holding 500 YLDLY-S will result in a total stake
              multiplier of 15%.
            </p>
          </p>
          <h4>Risks of liquidity providing</h4>
          <p>
            Providing liquidity in a common AMM like Uniswap and PancakeSwap bears the provider with the risk of impermanent loss. Please
            research the topic before participating with Yieldly liquidity mining in any way. Yieldly takes no responsibility of <i>ANY</i>{" "}
            user losses.
          </p>
          <h4>Smart contract risk</h4>
          <p>
            Using Yieldly products means using our Solidity-codebase deployed in any EVM-chain Yieldly supports. Currently that means
            Binance Smart Chain - most of our codebase is derivates of audited and time-tested contracts but Yieldly takes <i>NO</i>{" "}
            responsibilities for any financial losses that incur from using the service.
          </p>
          <h3>Tokenomics</h3>
          <p>
            Yieldly has two main tokens - named <b>YLDLY-S (static)</b> and <b>YLDLY-I (inflating)</b>.
          </p>
          <p>
            As many of you know about the reflective token model, a fee is applied on token transfer which is automatically distributed
            amongst holders to achieve a passive yield. <br />
            But in addition to the basic mechanism - YLDLY-I will have a continous inflation which will increase your token balance without
            any action needed.
          </p>
          <p>
            Both of these tokens have reflective properties, the difference being that the total supply of YLDLY-I will inflate over time.
            While the project will set the initial values for transaction fees - it is the goal for project to have the community adjust
            these rates through the governance module.
          </p>
          <p>Liquidity mining provided by the project will use both of the tokens.</p>
          <p>
            S-token holders being granted a multiplier according to their wallet holdings and I-tokens being used by purchasing a
            per-farm-basis multiplier. <br /> While it is easier to acquire more YLDLY-I since the balance is on a continous increase - it
            must be spent to gain the most benefit. S-token will benefit every holder through the project lottery and holding multiplier.
          </p>
          <p style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <b>YLDLY-S</b>
            <ul>
              <li>10,000,000 maximum supply</li>
              <li>1% fee on transfer (and sell)</li>
              <li>Adjustable fees through governance</li>
            </ul>
            <img src={yldlysdist} width="400" height="225" alt="YLDLY-S token distribution" style={{ border: "2px solid white" }} />
          </p>
          <p style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <b>YLDLY-I</b>
            <ul>
              <li>10,000,000 initial supply</li>
              <li>5% fee on transfer</li>
              <li>50% burn from the transfer fee (2.5%) </li>
              <li>Adjustable fees through governance</li>
              <li>Automatic supply inflation with a rate of 1.5 YIELD I per second</li>
            </ul>
            <img src={yldlyidist} width="400" height="225" alt="YLDLY-S token distribution" style={{ border: "2px solid white" }} />
          </p>
        </Card>
      </div>
    </Content>
  );
}

export default Ecosystem;
