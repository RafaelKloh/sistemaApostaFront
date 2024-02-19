const validacao = sessionStorage.getItem("idUsuarioSistemaAposta")
if(!validacao){
    window.location.replace('../index.html')
}
