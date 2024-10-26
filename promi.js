//const minhaPromessa = new Promise((resolve,reject)=>{
    //const nome ="Zully"

    //if(nome == "Zully"){
        //resolve(" Usuario Zully encontrado!!!!")
    //} else{
        //reject("Usuario Zully nao encontrado:(((")
    //}
//})

//minhaPromessa.then((dados)=>{
    //console.log(dados)
//}).catch((err)=>{
   // console.log(err)
//})

const minhaPromessa = new Promise((resolve,reject)=>{
    const idade=15

    if(idade>=18){
        resolve("Acesso permitido!!!!")
    } else{
        reject("Acesso negado :(((")
    }
})

minhaPromessa.then((dados)=>{
    console.log(dados)
}).catch((err)=>{
    console.log(err)
})





















