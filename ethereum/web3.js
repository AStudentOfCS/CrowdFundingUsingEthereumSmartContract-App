import Web3 from 'web3';
import keys from './config/keys';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // Users are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // Users are on the server **OR** the user is not running metamask
  const provider = new Web3.providers.HttpProvider(keys.RINKEBY_INFURA_API);
  web3 = new Web3(provider);
}

export default web3;
