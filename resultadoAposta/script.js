import {criarModal,modalResult} from "../modal.js"
const myHeaders = {
    "Content-Type": "application/json",
};

async function resultado() {
    let min = 0;
    let max = 99;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    let bichos = ["avestruz","aguia","burro","borboleta","cachorro","cabra","carneiro","camelo","cobra","coelho","cavalo","elefante","galo","gato","jacare","leao","macaco","porco","pavao","peru","touro","tigre","urso","veado","vaca"]
    let i = 0;

    let animal = []
    while (i < bichos.length) {
        if(numeroAleatorio >= i * 4 + 1 && numeroAleatorio <= (i + 1) * 4){
            animal = bichos[i]
            break; 
        }
        if(numeroAleatorio == 0){
            animal = bichos[24]
        }
        i++;
    }

    animal = bichos[i]
    console.log(animal)
    const data = dataConcurso.value
    console.log(data)
    const result = {
        dataSorteio:data,
        numeroMaquina:numeroAleatorio,
        animalSorteado:animal
    }

const bodyJson = JSON.stringify(result)
    const res = await fetch(
        "http://localhost:3000/user/resultado",
        {
            headers: myHeaders,
            method: "POST",
            body: bodyJson
        }
    )
    const resJson = await res.json()
    console.log(resJson)

    if(resJson.mensagem == "Sorteio ainda não realizado"){
        const mensagemErro = "Sorteio ainda nao realizado"
        criarModal(mensagemErro)
        return
    }

    else{
        const animal = resJson[0].animalSorteado
        const numero = resJson[0].numeroMaquina
        modalResult(animal,numero)
        return
    }
}



const form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    resultado()
})
