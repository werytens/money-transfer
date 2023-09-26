import abi from "./abi.js";

export let web3, contractInstanse;
const contractAddress = "0x2Cd968f251b0d5F11b9Eb821BC70bE4fc5893AC5";

export function network() {
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	contractInstanse = new web3.eth.Contract(abi, contractAddress);
}
network();

export let accounts;
accounts = await web3.eth.getAccounts();
