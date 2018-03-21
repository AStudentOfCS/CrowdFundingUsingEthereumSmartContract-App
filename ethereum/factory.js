import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa9EcE450b123e5FE1042cED4776164CD24E253e7'
);

export default instance;
