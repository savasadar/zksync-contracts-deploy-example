If ```yarn``` or ```npm``` is not installed your pc before, You have to install it. 
https://classic.yarnpkg.com/en/docs/install

INSTALL HARDHAT
```
yarn add --dev hardhat
```

Compile the Smart Contract!
```
yarn hardhat compile
```

Deploy Default Contract
```
yarn hardhat deploy-zksync
```

Deploy ERC721(NFT) Contract (You can duplicate and change the script)
```
yarn hardhat deploy-zksync --script deploy/deploy-erc721.ts --network zkSyncTestnet
```

Verify Contract
```
yarn hardhat verify "<YOUR_SC_ADDRESS>" 'Hi there!' --network zkSyncMainnet
```
