import { web3, contractInstanse, contractAddress } from '../app.js';

async function acceptTransfer(number, codeword) {
    const registeredTransactios = await contractInstanse.methods.getAllTransfers().call();
    // const valueToTransfer = await web3.utils.fromWei(registeredTransactios[value].value, 'ether');

    const hashCode = await web3.utils.sha3(codeword);

    let currentAccount = document.querySelector('.now_user_address').innerHTML;
    await contractInstanse.methods.accept_transfer(hashCode, Number(number)).send({from: currentAccount})
    window.location.reload();
}

export default acceptTransfer;
