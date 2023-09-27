import abi from "./abi.js";

export let web3, contractInstanse;
export let contractAddress = "0xbA3a28C85E7D90761E9bd84A765497fC85e48864";

export function network() {
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	contractInstanse = new web3.eth.Contract(abi, contractAddress);
}
network();

export let accounts;
accounts = await web3.eth.getAccounts();
