If ```yarn``` or ```npm``` is not installed your pc before, You have to install it. 
https://classic.yarnpkg.com/en/docs/install

INSTALL HARDHAT
```
yarn add --dev hardhat
```

-> Rename ".env-sample" to ".env"
-> Open ".env" and replace API_KEY and WALLET_KEY 

🚨DON'T PUSH YOUR PRIVATE KEY TO ANY PUBLIC REPO, DELETE IT AFTER DEPLOYMENT!!!)

Install Dependencies
```
yarn install
```

Compile the Smart Contract!
```
yarn hardhat compile
```

1️⃣ For Deploy Default Contract
```
yarn hardhat deploy-zksync
```

2️⃣ For Deploy ERC721(NFT) Contract (You can duplicate and change the script)
```
yarn hardhat deploy-zksync --script deploy/deploy-erc721.ts --network zkSyncTestnet
```

Verify Contract
```
yarn hardhat verify "<YOUR_SC_ADDRESS>" 'Hi there!' --network zkSyncMainnet
```
