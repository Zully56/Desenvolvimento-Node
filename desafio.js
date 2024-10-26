function obterTemperatura(){
    return new Promise((tem)=>{
        setTimeout(()=>{
            console.log("Espera de 3 segundo")
            tem()
        },3000)
    })
}
async function verificarClima(tem){
    console.log("A temperatura em Sao Paulo é " + tem )
    await obterTemperatura()
    
}
verificarClima(25)