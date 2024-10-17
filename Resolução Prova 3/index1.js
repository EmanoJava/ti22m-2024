function somaSerie(cont){

    let soma = 0

    cont = 3

    for(let x=1, y=1; x<= cont; x++, y += 2){
        soma = soma + x*y
    }

    return soma
}

console.log(somaSerie(3))
console.log(somaSerie(4))