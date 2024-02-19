import{criarModal,resultAdmin} from "../modal.js"
const myHeaders = {
    "Content-Type": "application/json",
};
async function resultado() {
    const dataConcurso = document.querySelector("#dataLucro")
    const data = dataConcurso.value
    const partes = data.split('-');
    const dataInvertida = partes.reverse().join('-');
    const result = {
        dataSorteio:dataInvertida
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

    if(resJson.length <= 0){
        const mensagemErro = "Nenhuma aposta realizada neste dia"
        criarModal(mensagemErro)
        return
    }

    else{
        let nome = []
        let valor = []
        for (let i = 0; i < resJson.length; i++) {
            nome.push(resJson[i].nome)
            valor.push(resJson[i].valorApostado)
        }
        resultAdmin(nome,valor)
    }

}
const form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    resultado()
})



