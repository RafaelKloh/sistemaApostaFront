const myHeaders = {
    "Content-Type": "application/json",
};

async function loteria(){
    const res = await fetch(
        "https://loteriascaixa-api.herokuapp.com/api/federal/latest",
        {
            headers: myHeaders,
            method: "GET",
        }
    )

    const resJson = await res.json()
    localStorage.setItem("concurso",resJson.concurso)
}
loteria()

async function resultadoLoteria(){
    const concurso = localStorage.getItem("concurso")
    const resConcurso = await fetch(
        `https://loteriascaixa-api.herokuapp.com/api/federal/${concurso}`,
        {
            headers: myHeaders,
            method: "GET",
        }
    )
    const resConcursoJson = await resConcurso.json()
    console.log(resConcursoJson)

    
}
resultadoLoteria()