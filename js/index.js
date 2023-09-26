import { web3, accounts, contractInstanse } from './app.js'
import renderAccounts from './renderFunctions/renderAccounts.js'
import renderUsers from './renderFunctions/renderUsers.js'
import renderTCM from './renderFunctions/renderTransferCreateModal.js';
import renderTransactions from './renderFunctions/renderTransactions.js';

const button = document.querySelector('.transfer_add_modal');

const registeredUsers = await contractInstanse.methods.getAllUsers().call();
const regusteredTransactios = await contractInstanse.methods.getAllTransfers().call();

button.addEventListener('click' , async () => {
    await renderTCM(registeredUsers);
})

export let currentAccount = accounts[0];

renderAccounts(accounts);

renderUsers([currentAccount], 'Текущий пользователь');
renderUsers(accounts, 'Все пользователи');
renderUsers(registeredUsers, 'Зарегистрированные пользователи');

renderTransactions(regusteredTransactios);


// async function registration() {
    // console.log(await contractInstanse.methods.users().call())
    // await contractInstanse.methods.registration("maxik", currentAccount).send({from: currentAccount})
    // await contractInstanse.methods.registration("maxik2", accounts[1]).send({from: currentAccount})
// }
// await registration()



// async function addTransfer() {
    // const result = await myContract.methods.store(value).send({ from: currentAccount }); //Обращаемся к методу (send - вызов с изменением состояния)
    // console.log(await contractInstanse.methods.add_transfer);
// }
// addTransfer();
