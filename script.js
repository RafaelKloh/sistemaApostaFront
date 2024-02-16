import { criarModal } from "./modal.js"
const myHeaders = {
    "Content-Type": "application/json",
};

async function login() {
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    const user = {
        email: email.value,
        senha: senha.value
    }

    const bodyJson = JSON.stringify(user)
    const res = await fetch(
        "http://localhost:3000/login",
        {
            headers: myHeaders,
            method: "POST",
            body: bodyJson
        }
    )
    const resJson = await res.json()
    
    if (resJson.mensagem) {
        const mensagemErro = "Usuario não encontrado"
        criarModal(mensagemErro)
    }

    for (let i = 0; i < resJson.length; i++) {
        if (resJson[i].email == email.value && resJson[i].senha == senha.value) {
            const idUsuario = resJson[i].idUsuario;
            localStorage.setItem("idUsuarioSistemaAposta", idUsuario)
            const user = {
                idUsuario: idUsuario
            }

            const bodyJson = JSON.stringify(user)
            const resStatus = await fetch(
                `http://localhost:3000/user/${idUsuario}/status`,
                {
                    headers: myHeaders,
                    method: "POST",
                    body: bodyJson
                }
            )

            const resJsonStatus = await resStatus.json()
            const idStatus = console.log(resJsonStatus[0])
            localStorage.setItem("idStatusSistemaAposta", idStatus)


            if (resJson[i].idTipoUsuario == 1) {
                window.location.replace('/menuUsuario/index.html')
            }
            else {
                localStorage.setItem("idAdminSistemaAposta", 2)
                window.location.replace('/menuAdmin/index.html')
            }

        }
    }
}

const form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    login()
})