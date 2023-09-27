import { web3 } from '../app.js'

const userSelect = document.querySelector(".user_select");
const balanceField = document.getElementById("userBalance");

const renderAccounts = (array) => {

    array.forEach(element => {
        userSelect.innerHTML += `<option value = '${element}' class = 'option'>${element}</option>`
    })

    userSelect.addEventListener('change', async (event) => {
        let balance = (await web3.eth.getBalance(event.target.value));
        balance = Number(await web3.utils.fromWei(balance, 'ether')).toFixed(2);
        balanceField.innerHTML = 'Balance: ' + balance
    });

}


export default renderAccounts;
