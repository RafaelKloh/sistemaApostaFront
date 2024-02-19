import {sair} from"../logout.js"
const validacao = sessionStorage.getItem("idUsuarioSistemaAposta")
if(!validacao){
    window.location.replace('../index.html')
}

async function logout(){
    sair()
}
const button = document.getElementById("sair")
button.addEventListener("click", (event) => {
    logout()
})