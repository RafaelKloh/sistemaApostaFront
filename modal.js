export function criarModal(mensagemErro){
    const body = document.body
    body.insertAdjacentHTML("beforeend",`
    <div class="modalContainer">
        <div class="modalPrincipal">
            <p>${mensagemErro}</p>
            <button id="botaoModal">OK</button>
        </div>
    </div>
    `)

    const botaoModal = document.querySelector("#botaoModal")
    botaoModal.addEventListener("click",()=>{
        const modalContainer = document.querySelector(".modalContainer")
        modalContainer.remove()
    })
}

export function mostrarAnimais(){
    const body = document.body
    body.insertAdjacentHTML("beforeend",`
    <div class="modalContainer">
        <div class="modalPrincipal">
            <img src="/img/jogo-do-bicho-tabela.png">
            <button id="botaoModal">X</button>
        </div>
    </div>
    `)
    const botaoModal = document.querySelector("#botaoModal")
    botaoModal.addEventListener("click",()=>{
        const modalContainer = document.querySelector(".modalContainer")
        modalContainer.remove()}
)}