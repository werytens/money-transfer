import { web3, contractInstanse } from '../app.js';

async function transfer(target, value, codeword) {
    let currentAccount = document.querySelector('.now_user_address').innerHTML;
    const codeHex = await web3.utils.sha3(codeword);
    console.log(value, target, codeHex)

    await contractInstanse.methods.add_transfer(Number(value), target, codeHex).send({from: currentAccount, value: web3.utils.toWei(value, 'ether'), gas: "6721975" })
    window.location.reload();
}

export default transfer;
