//var contador = 0
//const mensagem = setInterval(()=>{
    //console.log("Este msg sera exibida 3 vezes")
    //contador ++
    //if(contador==3){
        //clearInterval(mensagem)
    //}
//},5000)

//const timeoutID = setTimeout(()=>{
   // console.log("Isso nao sera exibido porque vamos cancelar!")
//},5000)

//clearTimeout(timeoutID)
//console.log("O setTimeout foi cancelado antes de ser executado")

var contador = 10
const tempo = setInterval(()=>{
    console.log("contagem regresiva " + contador)
    contador--
    if(contador == 0){
        clearInterval(tempo)
    }
})
setTimeout(function(){
    console.log("Tempo esgotado")
},1000)