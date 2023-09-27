import acceptTransfer from "../paymentFunctions/acceptTransfer.js";

async function renderTAM() {
    await createModal();

    document.querySelector('.ta_modal').addEventListener("click", () => {
        document.querySelector('.ta_modal').style.display = 'none';
    })

    document.querySelector('.ta_content').addEventListener("click", (e) => {
        e.stopPropagation();
    })

    document.querySelector('.ta_button').addEventListener("click", async () => {
        const taValue = document.querySelector(".ta_input").value;

        if (taValue.length != 0) {
            await acceptTransfer('secretcode', taValue)
        }

    })
}

async function createModal() {
    document.querySelector('.ta_modal').style.display = 'flex';
}

export default renderTAM;
