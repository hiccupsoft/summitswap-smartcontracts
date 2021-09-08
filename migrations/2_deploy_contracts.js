// const { artifacts } = require("hardhat");
const KAPEX = artifacts.require('./Kapex.sol');
const MasterChef = artifacts.require('./MasterChef.sol');

module.exports = function(deployer, network, accounts) {
  console.log(network, accounts)
  return deployer.then(() => {
    return deployContracts(deployer, network, accounts)
  })
}

async function deployContracts(deployer, network, accounts) {
   let Kapex = await deployer.deploy(KAPEX)
   let masterChef = await deployer.deploy(MasterChef, Kapex.address, '0x1FF67e3bfdd16CE8d6B3c62562908c7f2788136B', '0x1FF67e3bfdd16CE8d6B3c62562908c7f2788136B', 1, 5214877);
}
