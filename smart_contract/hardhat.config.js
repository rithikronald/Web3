//https://eth-rinkeby.alchemyapi.io/v2/NptKikD1QMWU6c2AFtJER6ffrjpkzxps
// require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-waffle')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    rinkeby:{
      url:"https://eth-rinkeby.alchemyapi.io/v2/NptKikD1QMWU6c2AFtJER6ffrjpkzxps",
      accounts:['5a2dc501e2d5a0ec2f3590d535ad6657043be84ed8680f1fa6089ce3dc1d32d6']
    }
  }
};
