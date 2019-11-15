// 01: faça uma função que retorne se uma dada string contém a letra h nela

function retornarString (palavra){
    const regex = /h/
    return regex.test(palavra)
}
const resultado = retornarString('baby shark')
console.log(resultado)

// 02: altere sua função para que ela aceite maiuscula e minuscula (case insensitive)

function aceiteMaiusculaeMinuscula(palavras){
    const regex = /a/i
return regex.test(palavras) 
}
const resultado = aceiteMaiusculaeMinuscula('aline')
console.log(resultado)


// 03: altere sua função para que ela retorne se a string
// termina com `a` ou comece com `b`
// aceitando maiuscula e minuscula tambem
function verificarPalavra(palavra){
    const regex = /$a|^b/
    return regex.test(palavra)
}
const resultado = verificarPalavra('bebe ')
console.log(resultado)

// DESAFIO: altere sua função pra verificar a string contem números

function verificarNumeros(palavra){
    const regex = /[0-9]/

    return regex.test(palavra)
}
const resultado = verificarNumeros('al2ine')
console.log(resultado)