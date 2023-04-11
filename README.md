yarn hardhat compile

//Deploy Default Contract
yarn hardhat deploy-zksync

//Deploy ERC721(NFT) Contract (You can duplicate and change the script)
yarn hardhat deploy-zksync --script deploy/deploy-erc721.ts --network zkSyncTestnet

yarn hardhat verify "0x752eA22218a0a0954b8BEbaD20FfCfBB236B756E" 'Hi there!' --network zkSyncMainnet