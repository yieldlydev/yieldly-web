import { getPricingFor } from "./coingecko";

export const getPrices = async () => {
  const bnbPrice = await getPricingFor("binancecoin");

  return {
    bnb: bnbPrice.usd ? bnbPrice.usd : "...",
    yldlys: "...",
    yldlyi: "...",
  };
};
