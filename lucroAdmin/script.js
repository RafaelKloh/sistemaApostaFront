import { criarModal, resultAdmin } from "../modal.js"
import { sair } from "../logout.js"

const validacao = sessionStorage.getItem("idUsuarioSistemaAposta")
if (!validacao) {
    window.location.replace('../index.html')
}


const myHeaders = {
    "Content-Type": "application/json",
};
async function resultado() {
    const dataConcurso = document.querySelector("#dataLucro")
    const data = dataConcurso.value
    const partes = data.split('-');
    const dataInvertida = partes.reverse().join('-');
    const result = {
        dataSorteio: dataInvertida
    }

    const bodyJson = JSON.stringify(result)
    const res = await fetch(
        "http://localhost:3000/admin/resultado",
        {
            headers: myHeaders,
            method: "POST",
            body: bodyJson
        }
    )
    const resJson = await res.json()
    console.log(resJson)

    if (resJson.length <= 0) {
        const mensagemErro = "Nenhuma aposta realizada neste dia"
        criarModal(mensagemErro)
        return
    }

    else {
        let nomesUnicos = []
    let valoresAgrupados = {}

    for (let i = 0; i < resJson.length; i++) {
        const nomeAtual = resJson[i].nome;

        if (!nomesUnicos.includes(nomeAtual)) {
            nomesUnicos.push(nomeAtual);
            valoresAgrupados[nomeAtual] = resJson[i].valorApostado;
        } else {
            valoresAgrupados[nomeAtual] += resJson[i].valorApostado;
        }
    }

    const nomes = Object.keys(valoresAgrupados);
    const valores = Object.values(valoresAgrupados);
    const valorTotal = valores.reduce((total, valor) => total + valor, 0);

    resultAdmin(nomes, valores, valorTotal);
    }
}

async function logout() {
    sair()
}

const form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    resultado()
})

const button = document.getElementById("sair")
button.addEventListener("click", (event) => {
    logout()
})








