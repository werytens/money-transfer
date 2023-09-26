import { web3, accounts, contractInstanse } from '../app.js';
import { currentAccount } from '../index.js'

async function transfer(target, value) {
    await contractInstanse.methods.add_transfer(Number(value), target, "secretcode").send({from: currentAccount, value: web3.utils.toWei(value, 'ether'), gas: "6721975" })
}

export default transfer;
