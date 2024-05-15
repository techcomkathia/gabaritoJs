// 1. Crie uma código que recebe três notas, adicione as três notas em um novo array. Calcule sua média a partir dos índices e em seguida exiba o array na tela. 

let notas=[]
notas[0]= Number(prompt('Digite uma nota'))
notas[1]= Number(prompt('Digite uma nota'))
notas[2]= Number(prompt('Digite uma nota'))
let soma = 0

for(let indice = 0; indice<=2; indice++){
    notas[indice]= Number(prompt('Digite uma nota'))
    if(indice==1){
        soma+= notas[indice]/2
    }
    else{
        soma+= notas[indice]}
}


// 2. Agora antes de calcular a média, acesse o valor do segundo item do array e o divida por 2.

let media = soma / notas.length

console.log(media) // 5.4568789
//( 5.4568789).toFixed -----> 5.45








