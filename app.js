function executarOperaçao(x,y,callback){
    let resultado = x + y
    callback (resultado)
}
function exibibrResultado(res){
    console.log("Resultado = " + res)
}




executarOperaçao(5,3,exibibrResultado)