const myHeaders = {
    "Content-Type": "application/json",
};

async function listaUsuario() {
    const res = await fetch(
        "http://localhost:3000/admin/listaUsuario",
        {
            headers: myHeaders,
            method: "GET"
        }
    )
    const resJson = await res.json()
    const table = document.querySelector("#table")
    let nome = []
    let email = []
    let senha = []

    for (let i = 0; i < resJson.length; i++) {
        nome.push(resJson[i].nome)
        email.push(resJson[i].email)
        senha.push(resJson[i].senha)
        table.insertAdjacentHTML("beforeend", `
    <td>${nome[i]}</td>
    <td>${email[i]}</td>
    <td>${senha[i]}</td>
    <td><form id="form">
    <input type="submit" value="Editar" id="editar">
    <input type="submit" value="Excluir" id="excluir">
    <input type="hidden"id="idUsuario">
</form></td>
    `)
    }
}
listaUsuario()