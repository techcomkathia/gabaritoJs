// 1. Escreva uma função que recebe um nome como parâmetro e imprima uma mensagem “Olá” + nome



function  falarNomeLocal(nome, funcao) {
   funcao(nome)
}

function falarNomeRecife(nome){
    console.log(`${nome}! Ei boooy!`)
}

function falarNomeFortaleza(nome){
    console.log(`${nome}! Ei Mahhh!`)
}

function falarNomeSalvador(nome){
    console.log(`${nome}! Ei pivete!`)
}


falarNomeLocal('Cleitinho', falarNomeFortaleza)