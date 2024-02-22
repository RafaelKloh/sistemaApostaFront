const validacao = localStorage.getItem("idUsuarioSistemaAposta")
if(!validacao){
    window.location.replace('../index.html')
}