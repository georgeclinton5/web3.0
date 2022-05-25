require('@nomiclabs/hardhat-waffle');
require('dotenv').config()

const { META_ACCOUNT_ID, RINKEBY_URL } = process.env;

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: RINKEBY_URL,
      accounts: [META_ACCOUNT_ID],
      gas: '0.00005'
    },
  },
};