const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const seedPhrase = process.env.ETH_DEV_SEED_PHRASE;
const infuraId = process.env.INFURA_ID;
const infuraSecret = process.env.INFURA_SECRET;
const endpoint = `https://ropsten.infura.io/v3/${infuraId}`;

const provider = new HDWalletProvider(seedPhrase, endpoint);
const web3 = new Web3(provider);
