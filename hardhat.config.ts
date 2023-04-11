import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

require('dotenv').config();

module.exports = {
    zksolc: {
        version: "1.3.5",
        compilerSource: "binary",
        settings: {},
    },
    defaultNetwork: "zkSyncTestnet",

    networks: {
        zkSyncTestnet: {
            url: "https://zksync2-testnet.zksync.dev",
            ethNetwork: "https://rpc.ankr.com/eth_goerli", // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
            zksync: true,
            verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification'
        },
        zkSyncMainnet: {
            url: "https://zksync2-mainnet.zksync.io",
            ethNetwork: "https://rpc.ankr.com/eth", // Can also be the RPC URL of the network (e.g. `https://infura.io/v3/<API_KEY>`)
            zksync: true,
            verifyURL: 'https://zksync2-mainnet-explorer.zksync.io/contract_verification'
        }
    },
    etherscan: {
        apiKey: process.env.API_KEY //<Your API key for Etherscan>,
    },
    solidity: {
        version: "0.8.17",
    },
};
