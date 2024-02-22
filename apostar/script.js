import {criarModal, mostrarAnimais} from "../modal.js"

// const validacao = localStorage.getItem("idUsuarioSistemaAposta")
// if(validacao != true){
//     window.location.replace('../index.html')
// }

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

    if(numeroUsuario.value <= 0 || numeroUsuario.value > 99){
        const mensagemErro = "Escolha uma opção de aposta válida"
        criarModal(mensagemErro)
        return
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
    console.log(resJson)

    console.log(res.status)
    if(res.status == 200){
        window.location.replace("../resultadoAposta/index.html")
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