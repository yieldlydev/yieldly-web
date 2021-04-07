import { ethers } from "ethers";
import { Token, tokens as unboundTokens } from "./../eth/contracts";
import { getPricingFor } from "./coingecko";

export const getPrices = async (provider: any) => {
  const bnbPrice = await getPricingFor("binancecoin");
  const tokens = unboundTokens(provider);

  const yldlysPrice = await getTokenPrice(tokens.YLDLYS, tokens.YLDSWBNB, tokens.WBNB, bnbPrice.usd || 370);
  const yldlyiPrice = await getTokenPrice(tokens.YLDLYI, tokens.YLDIWBNB, tokens.WBNB, bnbPrice.usd || 375);
  console.log(bnbPrice);

  return {
    bnb: bnbPrice.usd ? bnbPrice.usd : "...",
    yldlys: yldlysPrice,
    yldlyi: yldlyiPrice,
  };
};

// Get prices from DEX
const getTokenPrice = async (token: Token, lpToken: Token, wbnb: Token, wbnbPrice: number) => {
  try {
    const tokenInLP = ethers.utils.formatUnits(await token.contract.balanceOf(lpToken.contract.address), 9);
    console.log(tokenInLP);
    const wbnbInLp = (await wbnb.contract.balanceOf(lpToken.contract.address)) / 1e18;

    console.log(wbnbInLp);
    // Get amount of token in LP we want the price for
    return ((wbnbInLp * wbnbPrice) / parseFloat(tokenInLP)).toFixed(5);
  } catch (e) {
    throw new Error(e);
  }
};
