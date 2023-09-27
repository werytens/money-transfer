import { accounts, contractInstanse } from '../app.js';

async function registration(address, name) {
    await contractInstanse.methods.registration(name, address).send({from: accounts[0]})
}

export default registration;