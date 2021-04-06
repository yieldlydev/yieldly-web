import React from "react";
import bnblogo from "../../../assets/bnb-logo.png";
import yldlylogo from "../../../assets/logo-base.svg";
import busdlogo from "../../../assets/busd-logo.png";
import cakelogo from "../../../assets/pancake-logo.png";
import Content from "../../Content/Content";
import Farm from "../../Farm/Farm";
import Link from "../../Link/Link";
import useNavigation from "../../../useNavigation";
import Card from "../../Card/Card";
import "./Farms.scss";

const farms = [
  {
    name: "wbnb/YLDLY-S",
    icon: yldlylogo,
  },
  {
    name: "wbnb/YLDLY-I",
    icon: yldlylogo,
  },
  {
    name: "YLDLY-S/YLDLY-I",
    icon: yldlylogo,
  },
  {
    name: "wbnb/busd",
    icon: bnblogo,
  },
  {
    name: "busd",
    icon: busdlogo,
  },
  {
    name: "cake",
    icon: cakelogo,
  },
];

function Farms() {
  const [, setScreen] = useNavigation();
  return (
    <Content title="Liquidity mining">
      <div className="farms">
        <Card className="overview">
          <h4>Overview</h4>
          <p>
            While having reflective token properties Yieldly offers users a commonly known event called liquidity mining.
            <br />
            1,000,000 of YLDLY-S and 1,500,000 of YLDLY-I token supply was initially offered through the corresponding WBNB pair - rest of
            the public distribution will be claimed through participating in the liquidity mining.
          </p>
          <p>
            The event is planned to start in <b>week 14</b> of 2021 and will last a total 40 weeks.
          </p>
          <p>
            This event happens through common staking contract derivates with added functionality for Yieldly ecosystem-token holders and
            users who timelock their stakes.
          </p>
          <p>
            Incentivizing project loyalty - only YLDLY-S-token holders will reap maximum returns from the farms due to the permanent
            multiplier received from holding.
          </p>
          <p>
            In addition to YLDLY-S-token holding users can achieve higher APY compared to the global value by purchasing multipliers with
            different tokens. Main spendable token being the YLDLY-I-token. 25% of these purchases will be allocated towards the project
            lottery that every YLDLY-S-token holders are participants in while the rest is allocated towards project funding.
          </p>
          <p>
            <Link onClick={() => setScreen("ecosystem")} className="read-more">
              Read more about the ecosystem..
            </Link>
          </p>
        </Card>
        <div className="stats-container">
          <div className="farm-stats">
            <div className="tvl-title">TVL</div>
            <div className="tvl-value">$0</div>
          </div>
          <div className="farm-stats">
            <div className="vol-title">Volume (24h)</div>
            <div className="vol-value">$0</div>
            <div className="vol-title">Fees (24h)</div>
            <div className="vol-value fee-value">$0</div>
          </div>
        </div>
        <div className="farms-container">
          {farms.map((f) => (
            <Farm farm={f} key={f.name} />
          ))}
        </div>
      </div>
    </Content>
  );
}

export default Farms;
