
const duplica= (lista) => {
    let listaDuplicada=[]
    let i
    for( i=0; i<lista.length; i++){
        listaDuplicada.push(lista[i]*2)
    }
    return listaDuplicada
}
console.log(duplica([5,6,8]))