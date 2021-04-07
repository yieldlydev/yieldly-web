import React, { useState } from "react";
import Button from "../../Button/Button";
import Card from "../../Card/Card";
import Content from "../../Content/Content";
import "./Governance.scss";

function Governance() {
  const [sProposalAvailable] = useState(true);
  const [iProposalAvailable] = useState(true);
  const initialSfee = 10;
  const initialIfee = 50;
  const initialIBurn = 500;
  const initialIMint = 1.5;
  const [sFee, setSfee] = useState(initialSfee);
  const [iFee, setIfee] = useState(initialIfee);
  const [iBurn, setIBurn] = useState(initialIBurn);
  const [iMint, setIMint] = useState(initialIMint);
  return (
    <Content title="Governance">
      <div className="governance">
        <Card className="voting">
          <div className="governance-i-container">
            <div className="governance-item">
              <h3>Yieldly S transaction fee</h3>
              <div className="current-value">{initialSfee / 10}%</div>
              {sProposalAvailable && (
                <div className="proposal">
                  <b>Proposal slot available!</b>
                  <h5>New transaction fee</h5>
                  {sFee / 10}%
                  <input id="s-txfee" value={sFee} onChange={(e) => setSfee(parseInt(e.target.value))} type="range" min={0} max={200} />
                </div>
              )}
            </div>
            <Button>Submit S proposal</Button>
          </div>
          <div className="governance-i-container s-c">
            <div className="governance-item governance-i-c">
              <div className="governance-i">
                <h3>Yieldly I transaction fee</h3>
                <div className="current-value">{initialIfee / 10}%</div>
                {iProposalAvailable && (
                  <div className="proposal">
                    <b>Proposal slot available!</b>
                    <h5>New transaction fee</h5>
                    {iFee / 10}%
                    <input id="s-txfee" value={iFee} onChange={(e) => setIfee(parseInt(e.target.value))} type="range" min={0} max={200} />
                  </div>
                )}
              </div>
              <div className="governance-i">
                <h3>Yieldly I transaction burn</h3>
                <div className="current-value">{(initialIBurn / 1000) * (initialIfee / 10)}%</div>
                {iProposalAvailable && (
                  <div className="proposal">
                    <b>Proposal slot available!</b>
                    <h5>New burn fee</h5>
                    {((iBurn / 1000) * (iFee / 10)).toFixed(2)}%
                    <input
                      id="s-txfee"
                      value={iBurn}
                      onChange={(e) => setIBurn(parseInt(e.target.value))}
                      type="range"
                      min={0}
                      max={1000}
                    />
                  </div>
                )}
              </div>
              <div className="governance-i">
                <h3>Yieldly I minting rate</h3>
                <div className="current-value">{initialIMint} / sec</div>
                {iProposalAvailable && (
                  <div className="proposal">
                    <b>Proposal slot available!</b>
                    <h5>New minting rate</h5>
                    {iMint}/sec
                    <input
                      style={{ textAlign: "center" }}
                      id="s-txfee"
                      value={iMint}
                      onChange={(e) => setIMint(Math.min(1000, isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value)))}
                      type="number"
                      min={0}
                      max={1000}
                    />
                  </div>
                )}
              </div>
            </div>
            <Button>Submit I proposal</Button>
          </div>
        </Card>
        <Card className="overview">
          <h3>Governing yieldly</h3>
          <p>
            We have supplied an initial, sort of experimental governance module for taking care of the protocol parameters. <br />
            The current module supports adjustment of the following:
            <ul>
              <li>YLDLY-S transaction fee</li>
              <li>YLDLY-I transaction fee</li>
              <li>YLDLY-I burn fee</li>
              <li>YLDLY-I autominting rate</li>
            </ul>
          </p>
          <p>
            Voting happens with your balance value, in each proposal there is a possibility to vote either Yay (yes) or Nay (no). <br />
            Make careful decisions, votes for a proposal <b>cannot be withdrawn/switched.</b>
          </p>
          <p>A list of restrictions apply for proposals, voting and parameter values:</p>
          <ol>
            <li>Each vote must win by 20%</li>
            <li>YLDLY-S minimum threshold to pass is 250,000</li>
            <li>YLDLY-I minimum threshold to pass is 4% of supply (400,000 at genesis)</li>
            <li>YLDLY-S transaction fee cannot exceed 20%</li>
            <li>YLDLY-I transaction fee cannot exceed 20%</li>
            <li>YLDLY-I maximum burn rate is 100% of the fee, so 20% (minimum 0%)</li>
            <li>YLDLY-I maximum minting rate is 1000 YLDLY-I / second (1.5/sec initial)</li>
            <li>YLDLY-S minimum holding amount to submit a proposal is 25,000</li>
            <li>YLDLY-I minimum holding amount to submit a proposal is 40,000</li>
            <li>Voting happens within 5 days from proposal and is also a cooldown before a new proposal can be submitted</li>
            <li>You can vote as many times as you can if you gain more balance compared to your earlier vote</li>
          </ol>
          <p>
            <b>Have your say!</b>
          </p>
        </Card>
      </div>
    </Content>
  );
}

export default Governance;
