// Considere o seguinte array [10, 15, 17, 22, 9, 4]. Escreva um algoritmo que percorra o array e conte a quantidade de números pares nela. (você precisará usar contadores). Ao final exiba essa quantidade.
//£
let numeros = [10, 15, 17, 22, 9, 4]
let pares = 0

for(let i = 0; i< numeros.length; i++){
 if(numeros[i]%2==0){
    pares+=1
 }
}

console.log(` A quantidade de números pares é de ${pares}`)
