const validacao = localStorage.getItem("idUsuarioSistemaAposta")
console.log(validacao)
if(!validacao){
    window.location.replace('../index.html')
}