//import {criarModal} from "./modal.js"
const myHeaders = {
    "Content-Type": "application/json",
};

async function fromaPagamento() {
    const selectFormaPagamento = await fetch(
        "http://localhost:3000/pagamento",
        {
            headers: myHeaders,
            method: "GET"
        }
    );
    const JsonFormaPagamento = await selectFormaPagamento.json();
    console.log(JsonFormaPagamento);

    const select = document.getElementById("formaPgamento");

    for (let i = 0; i < JsonFormaPagamento.length; i++) {        
        const option = document.createElement("option");
        option.value = JsonFormaPagamento[i].idFormaPagamento;
        option.id = JsonFormaPagamento[i].idFormaPagamento
        option.textContent = JsonFormaPagamento[i].descricao;
        select.appendChild(option);
    }
}
fromaPagamento()

async function apostar(){
    const idUsuario = localStorage.getItem("idUsuarioSistemaAposta")
    const numeroUsuario = document.querySelector("#numeroAposta")
    const data = new Date()
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const dataCompleta = ano + "-" + mes + "-" + dia
    const select = document.getElementById("formaPgamento");
    const idFormaPagamento = select.value
    const valorApostado = document.querySelector("#valorAposta")
    const aposta = {
        idUsuario: idUsuario,
        numeroUsuario: numeroUsuario.value,
        data:dataCompleta,
        idFormaPagamento:idFormaPagamento,
        valorApostado:valorApostado.value
    }
    
}
const form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    apostar()
})