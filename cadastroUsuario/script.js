import { criarModal } from "../modal.js";

const myHeaders = {
    "Content-Type": "application/json",
};


async function cadastrar() {
    const nome = document.querySelector("#nome")
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    
    if(nome.value == "" || email.value == "" || senha.value == ""){
        const mensagemErro = "Preencha todods os campos"
        criarModal(mensagemErro)
        return
    }

    const cadastro = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        idTipoUsuario: 1
    }

    const bodyJson = JSON.stringify(cadastro)
    const res = await fetch(
        "http://localhost:3000/user",
        {
            headers: myHeaders,
            method: "POST",
            body: bodyJson
        }
    )



    const resJson = await res.json()
    if (resJson.mensagem === 'Email ja cadastrado') {
        const mensagemErro = "Email ja cadastrado"
        criarModal(mensagemErro)
    }

    else if (res.status == 200) {
        window.location.replace("../index.html")
    }

}

const form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    cadastrar()
})