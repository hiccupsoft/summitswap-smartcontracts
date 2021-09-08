# summitswap-main-smartcontracts

---

## Repository setup

## Install

To install the needed packages run:

`npm install`

### Build SmartContracts

To build the smart contracts run:

`truffle compile`

After compile, you can see compiled folder in which contains compiled JSON files.

### Deploy

To deploy the contracts to bsctestnet or bsc mainnet you need to set the parameters properly.

-Check the migrations folder\ 
-You can see the 2_deploy_contracts.js file\
-There are 2 contracts deployed(Kapex, MasterChef)\
-Kapex contract just deploy itself
-MasterChef contract has 6 parameters
 
 `await deployer.deploy(MasterChef, Kapex.address, DevAddress, FeeAddress, KapexPerBlock, StartBlock);`

-Check the truffle-config.js file

Right now, `const mnemonic = "";`\
You need to add the private key of the team wallet and It will be used to deploy the smart contract to main net or bsctestnet work\
For example: `const mnemonic = "2c52153a3784c54827a07fa5a0de0650466100be9ccecb5ea5cb43c49df94954";`

-Deploy the SmartContracts

To deploy on bsctestnet 
`truffle migrate --network bsctestnet` 

To deploy on bscnetwork
`truffle migrate --network mainnet`

### Current Kapex Address on Bsctestnet

http://testnet.bscscan.com/address/0xbaF513d9BDA330a1921092fC8ae6354F70A558FA#contracts


