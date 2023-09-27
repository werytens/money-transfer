import { contractInstanse } from '../app.js';

async function cancelTransfer(value) {
    let currentAccount = document.querySelector('.now_user_address').innerHTML;
    await contractInstanse.methods.cancel_transfer(Number(value)).send({from: currentAccount});
    window.location.reload();
}

export default cancelTransfer;
