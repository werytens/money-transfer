import { web3, contractInstanse } from '../app.js';

async function transfer(target, value) {
    let currentAccount = document.querySelector('.now_user_address').innerHTML;
    await contractInstanse.methods.add_transfer(Number(value), target, "secretcode").send({from: currentAccount, value: web3.utils.toWei(value, 'ether'), gas: "6721975" })
    window.location.reload();
}

export default transfer;
