import { web3, accounts, contractInstanse, contractAddress } from './app.js'
import renderAccounts from './renderFunctions/renderAccounts.js'
import renderUsers from './renderFunctions/renderUsers.js'
import renderTCM from './renderFunctions/renderTransferCreateModal.js';
import renderTransactions from './renderFunctions/renderTransactions.js';
import renderTCcM from './renderFunctions/renderTransferCancelModal.js';
import renderNowUser from './renderFunctions/renderNowUser.js';
import renderChangeUsers from './renderFunctions/renderChangeUsers.js';
import renderTAM from './renderFunctions/renderTransferAcceptModal.js';

const buttonAddTransfer = document.querySelector('.transfer_add_modal');
const buttonCancelTransfer = document.querySelector('.transfer_cancel_modal');
const buttonAcceptTransfer = document.querySelector('.transfer_accept_modal');

const registeredUsers = await contractInstanse.methods.getAllUsers().call();
const registeredTransactios = await contractInstanse.methods.getAllTransfers().call();

buttonAddTransfer.addEventListener('click' , async () => {
    await renderTCM(registeredUsers);
})

buttonCancelTransfer.addEventListener('click', async () => {
    await renderTCcM();
})

buttonAcceptTransfer.addEventListener('click', async () => {
    await renderTAM();
})

await renderChangeUsers(registeredUsers);
renderNowUser(accounts[0]);

renderAccounts(accounts);
renderUsers(accounts, 'Все пользователи');
renderUsers(registeredUsers, 'Зарегистрированные пользователи');

renderTransactions(registeredTransactios);

document.querySelector('.contract_balance').innerHTML = 'Баланс контракта = ' + await web3.utils.fromWei((await web3.eth.getBalance(contractAddress)), 'ether') + ' эфиров'

document.querySelector('.test').addEventListener('click', () => {
    console.log(document.querySelector('.now_user_address').innerHTML)
})

// async function registration() {
//     await contractInstanse.methods.registration("maxik2", accounts[1]).send({from: accounts[0]})
// }
// await registration()



// async function addTransfer() {
    // const result = await myContract.methods.store(value).send({ from: currentAccount }); //Обращаемся к методу (send - вызов с изменением состояния)
    // console.log(await contractInstanse.methods.add_transfer);
// }
// addTransfer();
