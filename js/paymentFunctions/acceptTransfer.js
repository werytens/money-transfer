import { web3, contractInstanse, contractAddress } from '../app.js';

async function acceptTransfer(code, value) {
    const registeredTransactios = await contractInstanse.methods.getAllTransfers().call();
    // const valueToTransfer = await web3.utils.fromWei(registeredTransactios[value].value, 'ether');

    let currentAccount = document.querySelector('.now_user_address').innerHTML;
    await contractInstanse.methods.accept_transfer(code, Number(value)).send({from: currentAccount})
    window.location.reload();
}

export default acceptTransfer;
