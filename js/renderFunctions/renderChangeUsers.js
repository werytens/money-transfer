import renderNowUser from "./renderNowUser.js";
import renderTransactions from "./renderTransactions.js";

const userChange = document.querySelector(".user_change");


const renderChangeUsers = (array) => {

    array.forEach(element => {
        userChange.innerHTML += `<option value = '${element}' class = 'option'>${element}</option>`
    })

    userChange.addEventListener('change', async (event) => {
        renderNowUser(event.target.value)
        localStorage.setItem('interfaceE', JSON.stringify({currentAccount: event.target.value}))
        await renderTransactions();
    });

}


export default renderChangeUsers;
