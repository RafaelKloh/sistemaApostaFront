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