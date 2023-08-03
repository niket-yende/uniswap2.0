import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xFe35a4BF69b33B4bA1D1be854CB31c2F3918c4d7"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/XeHkNfMVT5q8onkhqHPu8y8ZELqQAYYE",
  },
};