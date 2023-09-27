import cancelTransfer from '../paymentFunctions/cancelTransfer.js';

async function renderTCcM() {
    await createModal();

    document.querySelector('.tc_modal').addEventListener("click", () => {
        document.querySelector('.tc_modal').style.display = 'none';
    })

    document.querySelector('.tc_content').addEventListener("click", (e) => {
        e.stopPropagation();
    })

    document.querySelector('.tc_button').addEventListener("click", async () => {
        const tcValue = document.querySelector(".tc_input").value;

        if (tcValue.length != 0) {
            await  cancelTransfer(tcValue);
        }

    })
}

async function createModal() {
    document.querySelector('.tc_modal').style.display = 'flex';
}

export default renderTCcM;
