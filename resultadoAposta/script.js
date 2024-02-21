import { criarModal, modalResult } from "../modal.js"
import { sair } from "../logout.js"

const validacao = sessionStorage.getItem("idUsuarioSistemaAposta")
if (!validacao) {
    window.location.replace('../index.html')
}
const myHeaders = {
    "Content-Type": "application/json",
};

async function resultado() {
    let min = 0;
    let max = 9999;
    let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    if (numeroSorteado < 100) {
        numeroSorteado = `00${numeroSorteado}`
    }
    else if (numeroSorteado < 1000) {
        numeroSorteado = `0${numeroSorteado}`
    }

    let numeroAleatorio = ("000" + numeroSorteado).slice(-4); // Garante que tenha pelo menos 4 dígitos
    numeroAleatorio = parseInt(numeroAleatorio.slice(-2), 10);

    if (numeroAleatorio < 10) {
        numeroAleatorio = `0${numeroAleatorio}`
    }

    let bichos = ["Avestruz", "Aguia", "Burro", "Borboleta", "Cachorro", "Cabra", "Carneiro", "Camelo", "Cobra", "Coelho", "Cavalo", "Elefante", "Galo", "Gato", "Jacare", "Leao", "Macaco", "Porco", "Pavao", "Peru", "Touro", "Tigre", "Urso", "Veado", "Vaca"]
    let i = 0;

    let animal = []
    while (i < bichos.length) {
        if (numeroAleatorio >= i * 4 + 1 && numeroAleatorio <= (i + 1) * 4) {
            animal = bichos[i]
            break;
        }
        if (numeroAleatorio == 0) {
            animal = bichos[24]
        }
        i++;
    }

    animal = bichos[i]
    const data = dataConcurso.value
    console.log(data)
    const result = {
        dataSorteio: data,
        numeroMaquina: numeroSorteado,
        animalSorteado: animal
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

    if (resJson.mensagem == "Sorteio ainda não realizado") {
        const mensagemErro = "Sorteio ainda nao realizado"
        criarModal(mensagemErro)
        return
    }
    else {
        const idUsuario = sessionStorage.getItem("idUsuarioSistemaAposta")
        const partesData = data.split('-');
        const dataInvertida = partesData.reverse().join('-');
        const bodyData = {
            dataSorteio: dataInvertida
        }

        const bodyJson = JSON.stringify(bodyData)
        const resSelect = await fetch(
            `http://localhost:3000/user/${idUsuario}/resultadoApostaUsuario`,
            {
                headers: myHeaders,
                method: "POST",
                body: bodyJson
            }
        )
        const resJsonSelect = await resSelect.json()
        console.log(resJsonSelect)


        let numeroUsuario = []
        let animal = resJson[0].animalSorteado
        let numero = resJson[0].numeroMaquina
        let texto = ""
        for (let i = 0; i < resJsonSelect.length; i++) {
            

            if (resJsonSelect[i].idUsuario == idUsuario) {
                numeroUsuario.push(resJsonSelect[i].numeroUsuario)
                texto = "Numero(s) que você apostou:"
            }

        }
        if (numeroUsuario.length <= 0) {
            texto = "Você não fez nenhuma aposta nesse dia"
        }

        modalResult(animal, numero, numeroUsuario, texto)
        return

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



