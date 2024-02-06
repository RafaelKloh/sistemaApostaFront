async function sortearNumero(){
    let min = 0;
    let max = 99;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(numeroAleatorio);

    let bichos = ["avestruz","aguia","burro","borboleta","cachorro","cabra","carneiro","camelo","cobra","coelho","cavalo","elefante","galo","gato","jacare","leao","macaco","porco","pavao","peru","touro","tigre","urso","veado","vaca"]
    let indice = 0;

    while (indice < bichos.length) {
        if(numeroAleatorio >= indice * 4 + 1 && numeroAleatorio <= (indice + 1) * 4){
            console.log(bichos[indice]);
            break; 
        }
        if(numeroAleatorio == 0){
            console.log(bichos[24])
        }
        indice++;
    }
}

sortearNumero();
