// Considere o seguinte array [10, 15, 17, 22, 9, 4]. Escreva um algoritmo que percorra o array e conte a quantidade de números pares nela. (você precisará usar contadores). Ao final exiba essa quantidade.

let numeros = [10, 15, 17, 22, 9, 4]
let pares = 0

for(let i = 0; i< numeros.length; i++){
 if(numeros[i]%2==0){
    pares+=1
 }
}

console.log(` A quantidade de números pares é de ${pares}`)

// 2. Considere o seguinte array de notas [5.5, 6, 4.3, 7, 3.2, 8.2]. Crie um algoritmo que percorra esse array. E caso encontre alguma nota abaixo da média (média = 6), acrescente mais um ponto neste item. Ao final, exiba o array no console.

let notas = [5.5, 6, 4.3, 7, 3.2, 8.2]
console.log(notas)
for( let indice = 0; indice<= notas.length-1; indice++){
    if(notas[indice]<6){
        notas[indice]+=1
    }
}
console.log(notas)


notas[notas.length] = 'utilizei propriedade'
notas.push('inserido com push')
console.log(notas)
notas.unshift('início')


// [5.5, 6, 4.3, 7, 3.2, 8.2]

console.log(notas.includes(8.2))
