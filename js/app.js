import abi from "./abi.js";

export let web3, contractInstanse;
export let contractAddress = "0xb6cF334d4CE9e2Ca1BFCc24d542b01763F2cC8bC";

export function network() {
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	contractInstanse = new web3.eth.Contract(abi, contractAddress);
}
network();

export let accounts;
accounts = await web3.eth.getAccounts();
