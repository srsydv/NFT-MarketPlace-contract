// require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.8.4",
// };





require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
require("dotenv").config();
//  const { API_URL, PRIVATE_KEY } = process.env;
 const PRIVATE_KEY = "ffae7b8e2b80eeee3ed921b7d6a23816973d5f26a791233a30a23f7f8a21c66b";
 const API_URL = "https://rinkeby.infura.io/v3/afd13b31aa594a1699c7332a9ea599e0";
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // hardhat: {},
     ropsten: {
       url: API_URL,
       accounts: [PRIVATE_KEY],
     },
     rinkeby: {
      url: "https://rinkeby.infura.io/v3/afd13b31aa594a1699c7332a9ea599e0",
      accounts: [PRIVATE_KEY],
    },
    
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

