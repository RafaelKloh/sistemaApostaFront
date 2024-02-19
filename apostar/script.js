import {criarModal, mostrarAnimais} from "../modal.js"

// const validacao = localStorage.getItem("idUsuarioSistemaAposta")
// if(validacao != true){
//     window.location.replace('../index.html')
// }

const myHeaders = {
    "Content-Type": "application/json",
};

async function apostar(){
    const idUsuario = sessionStorage.getItem("idUsuarioSistemaAposta")
    console.log(idUsuario)
    console.log(localStorage)
    const numeroUsuario = document.querySelector("#numeroAposta")
    const data = new Date()
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const dataCompleta = ano + "-" + mes + "-" + dia
    const valorApostado = document.querySelector("#valorAposta")
    const aposta = {
        idUsuario: idUsuario,
        numeroUsuario: numeroUsuario.value,
        data:dataCompleta,
        valorApostado:valorApostado.value
    }

    if(idUsuario == "" || idUsuario == undefined){
        const mensagemErro = "Você deve estar logado para fazer isso"
        criarModal(mensagemErro)
        return
    }
    if(numeroUsuario.value == "" || valorApostado.value == ""){
        const mensagemErro = "Você preencher todos os campos"
        criarModal(mensagemErro)
        return
    }

    const bodyJson = JSON.stringify(aposta)
    const res = await fetch(
        `http://localhost:3000/user/aposta/${idUsuario}`,
        {
            headers: myHeaders,
            method: "POST",
            body: bodyJson
        }
    )
    const resJson = await res.json()

    if(res.status == 200){
        window.location.href = "../resultadoAposta/index.html"
    }
}

const form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    apostar()
})

const verAnimais = document.getElementById("tabelaAnimais")
verAnimais.addEventListener("submit", (event) => {
    event.preventDefault()
    mostrarAnimais()
    return
})