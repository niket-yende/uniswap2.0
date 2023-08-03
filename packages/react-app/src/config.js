import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x7E2cE1215d8336D9d3526222b71AE8acFA1952b4";
// console.log('ROUTER_ADDRESS: ', ROUTER_ADDRESS); 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/XeHkNfMVT5q8onkhqHPu8y8ZELqQAYYE",
  },
};