import { web3, contractInstanse } from '../app.js'
import cancelTransfer from '../paymentFunctions/cancelTransfer.js';
import renderTAM from './renderTransferAcceptModal.js';


const transactionStatuses = {
    "0": 'Ожидает обработки',
    "1": 'Подтверждена',
    "2": 'Отменена',
    "3": 'Отклонена'
}

async function renderTransactions() {
    document.querySelector('.transactions').innerHTML = ''


    const array = await contractInstanse.methods.getAllTransfers().call();
    const root = document.createElement('div');
    const nowUser = JSON.parse(localStorage.getItem("interfaceE")).currentAccount;

    document.querySelector('.transactions').append(root);

    let arrayForRender = array.filter(item => item.owner == nowUser);
    if (arrayForRender.length == 0) {
        arrayForRender = array.filter(item => item.target == nowUser);
    }

    root.innerHTML += `<h1>${"Ваши транзакции:"}</h1>`
    arrayForRender.forEach((transaction, index) => {

        let status = Object.keys(transactionStatuses).includes(String(transaction.status).slice(0)) ? transactionStatuses[String(transaction.status).slice(0)] : 'Статус транзакции неопознан';
        root.innerHTML += `<div class = 't_block'>
        <div class = 'transaction'>
            <h3>Транзакция номер ${transaction.number}</h3>
            <div>Адрес отправителя: ${transaction.owner}</div>
            <div>Статус: ${status}.</div>
            <div>Адрес получателя: ${transaction.target}</div>
            <div>Сумма: ${web3.utils.fromWei(transaction.value, 'ether')} эфир(а/ов).</div>
        </div>
        <div class = 't_actions t_actions_${transaction.number}'></div>
        `

        const actions = document.querySelector(`.t_actions_${transaction.number}`); 
        
        let currentAccount = document.querySelector('.now_user_address').innerHTML;

        if (transaction.status == 0) {
            if (transaction.owner == currentAccount) {
                actions.innerHTML += `<button class = 'cancel_button cancelbutton_${transaction.number}'>N</button>`
            } else {
                actions.innerHTML += `<button class = 'accept_button acceptbutton_${transaction.number}'>Y</button>`
            }
        }

        root.innerHTML += '';        
    })

    document.querySelectorAll(".accept_button").forEach(item => item.addEventListener('click', () => {
        const transactionNumber = Number(item.classList[1].split('_')[1]);

        renderTAM(transactionNumber);
    }))

    document.querySelectorAll(".cancel_button").forEach(item => item.addEventListener('click', () => {
        const transactionNumber = Number(item.classList[1].split('_')[1]);

        cancelTransfer(transactionNumber);        
    }))
}

export default renderTransactions;