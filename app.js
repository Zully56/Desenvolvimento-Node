function primeiraFunçao(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Espera de 1 segundo")
            resolve()
        },1000)
    })
}

async function segundaFunçao(){
    console.log("Iniciou a 2a funçao")
    await primeiraFunçao()
    console.log ("Terminou a 2a funçao")
}

//------chamada da funçao
segundaFunçao()   



















