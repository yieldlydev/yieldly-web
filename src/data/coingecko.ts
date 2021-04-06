async function getPricingFor(target: string) {
  const blob = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${target}&vs_currencies=usd`);
  const json = await blob.json();
  let result: any = null;
  for (const [, value] of Object.entries(json)) {
    result = value;
  }
  return result;
}

export { getPricingFor };
