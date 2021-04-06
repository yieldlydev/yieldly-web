import React, { useState } from "react";
import "./Multipliers.scss";

const multiplierTokens = ["YLDLY-I", "TBA 1", "TBA 2", "TBA 3"];

function Multipliers() {
  const [selectedToken, setSelectedToken] = useState(multiplierTokens[0]);
  const [balance] = useState(0);
  const [userLevel] = useState(0);
  const multiplierValues = [
    [5, 200],
    [10, 500],
    [15, 1000],
    [25, 2000],
  ];
  return (
    <div className="multipliers">
      <h4>Multipliers</h4>
      <div className="multiplier-options">
        {multiplierTokens.map((token) => (
          <div className={`multiplier-token ${token === selectedToken ? "active" : ""}`} onClick={() => setSelectedToken(token)}>
            {token}
          </div>
        ))}
      </div>
      <div className="multiplier-inputs">
        {multiplierValues.map(([percentage, cost], i) => {
          const isDisabled = cost > balance;
          const purchased = userLevel === i + 1;
          return (
            <div className={`multiplier-purchase-button ${isDisabled ? "disabled" : ""} ${purchased ? "active" : ""}`}>
              <div className="multiplier-percentage">{percentage}%</div>
              <div className="multiplier-percentage">
                {cost} {selectedToken}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Multipliers;
