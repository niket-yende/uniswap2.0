import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = process.env.REACT_APP_ROUTER_ADDRESS;
console.log('ROUTER_ADDRESS: ', process.env.REACT_APP_ROUTER_ADDRESS);
console.log('test: ', process.env.REACT_APP_ALCHEMY_GOERLI_ENDPOINT); 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: process.env.REACT_APP_ALCHEMY_GOERLI_ENDPOINT,
  },
};