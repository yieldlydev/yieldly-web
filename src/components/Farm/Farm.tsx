import React, { useState } from "react";
import Button from "../Button/Button";
import { BsFillCaretLeftFill } from "react-icons/bs";
import "./Farm.scss";
import Multipliers from "../Multipliers/Multipliers";

type Props = {
  farm: any;
};

function Farm({ farm }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="farm">
      <div className="farm-upper" onClick={() => setIsOpen((val) => !val)}>
        <div className="farm-header">
          <div className="farm-icon">
            <img src={farm.icon} width="40" height="40" alt="farm" />
          </div>
          <div className="farm-name">{farm.name}</div>
        </div>
        <div className="farm-data">
          <div className="data-entry apy">
            <div className="data-title">Allocation</div>
            <div className="data-value">0%</div>
          </div>
          <div className="data-entry apy">
            <div className="data-title">Global APY</div>
            <div className="data-value">0%</div>
          </div>
          <div className="data-entry apy">
            <div className="data-title">Your multiplier</div>
            <div className="data-value">0% </div>
          </div>
          <div className="data-entry farm-tvl">
            <div className="data-title">Total deposits</div>
            <div className="data-value">$0</div>
          </div>
          <div className="data-entry user-tvl">
            <div className="data-title">Your deposit</div>
            <div className="data-value">$0</div>
          </div>
        </div>
        <div className="opener">
          <BsFillCaretLeftFill style={isOpen ? { transform: "rotate(-90deg)" } : {}} size="28" />
        </div>
      </div>
      {isOpen && (
        <div className="farm-lower">
          <div className="farm-inputs">
            <input type="number" className="farm-input" />
            <div className="button-stack">
              <Button color="green">Deposit</Button>
              <Button color="green">Compound</Button>
              <Button>Withdraw</Button>
            </div>
          </div>
          <Multipliers />
        </div>
      )}
    </div>
  );
}

export default Farm;
