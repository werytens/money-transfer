import registration from "../otherFunctions/registration.js";

async function renderReg() {
    await createModal();

    document.querySelector('.reg_modal').addEventListener("click", () => {
        document.querySelector('.reg_modal').style.display = 'none';
    })

    document.querySelector('.reg_content').addEventListener("click", (e) => {
        e.stopPropagation();
    })

    document.querySelector('.reg_button').addEventListener("click", async () => {
        const name = document.querySelector(".reg_input").value;
        const address = document.querySelector('.reg_input_two').value;

        if (name.length != 0 && address.length != 0) {
            await registration(address, name)
            window.location.reload();
        }
    })
}

async function createModal() {
    document.querySelector('.reg_modal').style.display = 'flex';
}

export default renderReg;
