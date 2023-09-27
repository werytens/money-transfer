async function renderUsers(array, title) {
    const root = document.createElement('div');
    document.body.append(root);
    root.innerHTML += `<h1>${title + ":"}</h1>`
    array.forEach(user => {
        root.innerHTML += `<div>${user}</div>`
    })
}

export default renderUsers;
