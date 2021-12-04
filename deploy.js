const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const seedPhrase = process.env.ETH_DEV_SEED_PHRASE;
const infuraId = process.env.INFURA_ID;
const infuraSecret = process.env.INFURA_SECRET;
const endpoint = `https://ropsten.infura.io/v3/${infuraId}`;

const provider = new HDWalletProvider(seedPhrase, endpoint);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(`Attempting to deploy from account: ${accounts[0]}`);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ from: accounts[0], gas: "1000000" });

  console.log(`Contract deployed to ${result.options.address}`);
  provider.engine.stop();
};
deploy();
