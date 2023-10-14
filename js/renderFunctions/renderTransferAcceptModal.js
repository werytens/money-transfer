import acceptTransfer from "../paymentFunctions/acceptTransfer.js";

async function renderTAM(number) {
    await createModal();
    
    document.querySelector('.ta_button').addEventListener("click", async () => {
        const codeword = document.querySelector(".ta_input").value;
        await acceptTransfer(number, codeword)
    })
    
}

async function createModal() {
    document.querySelector('.ta_modal').style.display = 'flex';
}

export default renderTAM;
