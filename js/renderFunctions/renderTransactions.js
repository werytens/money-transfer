import { web3 } from '../app.js'

const transactionStatuses = {
    "0": 'Ожидает обработки',
    "1": 'Подтверждена',
    "2": 'Отменена',
    "3": 'Отклонена'
}

async function renderTransactions(array) {

    const root = document.createElement('div');

    document.body.append(root);

    root.innerHTML += `<h1>${"Добавленные транзакции:"}</h1>`
    array.forEach((transaction, index) => {

        let status = Object.keys(transactionStatuses).includes(String(transaction.status).slice(0)) ? transactionStatuses[String(transaction.status).slice(0)] : 'Статус транзакции неопознан';
        root.innerHTML += `
        <div class = 'transaction'>
            <h3>Транзакция номер ${index}</h3>
            <div>Адрес отправителя: ${transaction.owner}</div>
            <div>Статус: ${status}.</div>
            <div>Адрес получателя: ${transaction.target}</div>
            <div>Сумма: ${web3.utils.fromWei(transaction.value, 'ether')} эфир(а/ов).</div>
        </div>
        `
    })

    console.log(array)
}

export default renderTransactions;