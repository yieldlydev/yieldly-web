import { ethers } from "ethers";

export type Token = {
  name: string;
  decimals: number;
  contract: ethers.Contract;
};

export const tokens: (provider: any) => { [key: string]: Token } = (provider: any) => ({
  YLDLYS: {
    name: "Yieldly S",
    decimals: 9,
    contract: new ethers.Contract("0xdeEc7074448d4a126BD2e95a203739F3a5eAA422", require("./abi/erc20.json"), provider),
  },
  YLDLYI: {
    name: "Yieldly I",
    decimals: 9,
    contract: new ethers.Contract("0x250afe9ab9f0542a6c210a8be572b881279f6e00", require("./abi/erc20.json"), provider),
  },
  WBNB: {
    name: "WBNB",
    decimals: 18,
    contract: new ethers.Contract("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", require("./abi/weth.json"), provider),
  },
  BUSD: {
    name: "BUSD",
    decimals: 18,
    contract: new ethers.Contract("0xe9e7cea3dedca5984780bafc599bd69add087d56", require("./abi/erc20.json"), provider),
  },
  CAKE: {
    name: "CAKE",
    decimals: 18,
    contract: new ethers.Contract("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", require("./abi/erc20.json"), provider),
  },
  YLDSWBNB: {
    name: "YLDLYS/WBNB",
    decimals: 18,
    contract: new ethers.Contract("0xeEfD23340a675Ca0769990b0FD6E67e73C93393e", require("./abi/erc20.json"), provider),
  },
  YLDIWBNB: {
    name: "YLDLYI/WBNB",
    decimals: 18,
    contract: new ethers.Contract("0x89a73Ef04c5178E8D9cAF570bD00D6890361EC4D", require("./abi/erc20.json"), provider),
  },
});
