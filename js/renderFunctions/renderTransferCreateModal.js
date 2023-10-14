import transfer from '../paymentFunctions/transfer.js';


async function renderTCM(array) {
    console.log(array) 
    await createModal();

    document.querySelector('.tcm_modal').addEventListener("click", () => {
        document.querySelector('.tcm_modal').style.display = 'none';
    })

    document.querySelector('.tcm_content').addEventListener("click", (e) => {
        e.stopPropagation();
    })
    document.querySelector('.tcm_send').addEventListener("click", async () => {

        const tcmTarget = document.querySelector('.tcm_target').value;
        const tcmValue = document.querySelector('.tcm_value').value;
        const tcmCodeWord = document.querySelector('.tcm_code').value;
        
        if (tcmTarget.length != 0 && tcmValue.length != 0) {
            await transfer(tcmTarget, tcmValue, tcmCodeWord);
        }
    })
}

async function createModal() {
    document.querySelector('.tcm_modal').style.display = 'flex';
}

export default renderTCM;
