import {criarModal} from "./modal.js"
const myHeaders = {
    "Content-Type": "application/json",
};

async function apostar() {
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    const user = {
        email: email.value,
        senha: senha.value
    }

const bodyJson = JSON.stringify(user)
    const res = await fetch(
        "http://localhost:3000/apostar",
        {
            headers: myHeaders,
            method: "POST",
            body: bodyJson
        }
    )
    const resJson = await res.json()
    console.log(resJson)

    if(resJson.mensagem){
        const mensagemErro = "Usuario não encontrado"
        criarModal(mensagemErro)
    }
    for (let i = 0; i < resJson.length; i++) {

        if(resJson[i].email == email.value && resJson[i].senha == senha.value){
            window.location.replace('/apostar/index.html')
        }
    }
}

const form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    login()
})