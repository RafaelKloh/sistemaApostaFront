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

export function modalResult(animal,numero,numeroUsuario,texto){
    const body = document.body
    body.insertAdjacentHTML("beforeend",`
    <div class="modalContainer">
        <div class="modalPrincipal">
            <p>Animal sorteado:${animal}</p>
            <p>Numero sorteado:${numero}</p>
            <p>${texto}${numeroUsuario}</p>
            <button id="botaoModal">OK</button>
        </div>
    </div>
    `)
    const botaoModal = document.querySelector("#botaoModal")
    console.log("antes")
    botaoModal.addEventListener("click",()=>{
        console.log("judas")
        const modalContainer = document.querySelector(".modalContainer")
        modalContainer.remove()
    })
}

export function resultAdmin(nome,valor,valorTotal){
    const body = document.body
    body.insertAdjacentHTML("beforeend",`
    <div class="modalContainer">
        <div class="modalPrincipal">
            <p>Usuario(s) que apostaram: ${nome}</p>
            <p>Valor(es) apostados: ${valor}</p>
            <p>Valor total: ${valorTotal}</p>
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