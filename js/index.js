import { web3, accounts, contractInstanse, contractAddress } from './app.js'
import renderAccounts from './renderFunctions/renderAccounts.js'
import renderUsers from './renderFunctions/renderUsers.js'
import renderTCM from './renderFunctions/renderTransferCreateModal.js';
import renderTransactions from './renderFunctions/renderTransactions.js';
import renderTCcM from './renderFunctions/renderTransferCancelModal.js';
import renderNowUser from './renderFunctions/renderNowUser.js';
import renderChangeUsers from './renderFunctions/renderChangeUsers.js';
import renderTAM from './renderFunctions/renderTransferAcceptModal.js';
import renderReg from './renderFunctions/renderReg.js';

const buttonAddTransfer = document.querySelector('.transfer_add_modal');

const registeredUsers = await contractInstanse.methods.getAllUsers().call();

buttonAddTransfer.addEventListener('click' , async () => {
    await renderTCM(registeredUsers);
})


localStorage.setItem('interfaceE', JSON.stringify({currentAccount: accounts[0]}))

await renderChangeUsers(registeredUsers);
renderNowUser(accounts[0]);

renderAccounts(accounts);
renderUsers(accounts, 'Все пользователи');
renderUsers(registeredUsers, 'Зарегистрированные пользователи');

renderTransactions();

document.querySelector('.contract_balance').innerHTML = 'Баланс контракта = ' + await web3.utils.fromWei((await web3.eth.getBalance(contractAddress)), 'ether')

document.querySelector('.reg_modal_show').addEventListener('click', () => {
    renderReg();
})