import React from "react";
import "./Content.scss";

type Props = {
  title: string;
  children: any;
};

function Content({ title, children }: Props) {
  return (
    <div className="content-container">
      <div className="content">
        <h1>{title}</h1>
        {children}
      </div>
      <div className="footer">
        Yieldly, $YLDLY-S or $YLDLY-I are not an official Binance, Ethereum or Polkadot project. $YLDLY-S and $YLDLY-I are an experiment.
        Before purchasing $YLDLY-S or $YLDLY-I or any other tokens mentioned on this site or otherwise, you must ensure that the nature,
        complexity and risks inherent in the trading of cryptocurrency are suitable for your objectives in light of your circumstances and
        financial position. Many factors outside of the control of $YLDLY-S or $YLDLY-I will effect the market price, including, but not
        limited to, national and international economic, financial, regulatory, political, terrorist, military, and other events, adverse or
        positive news events and publicity, and generally extreme, uncertain, and volatile market conditions. Extreme changes in price may
        occur at any time, resulting in a potential loss of value, complete or partial loss of purchasing power, and difficulty or a
        complete inability to sell or exchange your digital currency. Yieldly, $YLDLY-S or $YLDLY-I shall be under no obligation to purchase
        or to broker the purchase back from you of your cryptocurrency in circumstances where there is no viable market for the purchase of
        the same. None of the content published on this site constitutes a recommendation that any particular cryptocurrency, portfolio of
        cryptocurrencies, transaction or investment strategy is suitable for any specific person. None of the information providers or their
        affiliates will advise you personally concerning the nature, potential, value or suitability of any particular cryptocurrency,
        portfolio of cryptocurrencies, transaction, investment strategy or other matter. The products and services presented on this website
        may only be purchased in jurisdictions in which their marketing and distribution are authorized.
        <br />
        <br />© Yieldly 2020-2021
      </div>
    </div>
  );
}

export default Content;
