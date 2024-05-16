// Considere o seguinte array de notas [5.5, 6, 4.3, 7, 3.2, 8.2]. Crie um algoritmo que percorra esse array. E caso encontre alguma nota abaixo da média (média = 6), acrescente mais um ponto neste item. Ao final, exiba o array no console.
//£
let notas = [5.5, 6, 4.3, 7, 3.2, 8.2]
console.log(notas)
for( let indice = 0; indice<= notas.length-1; indice++){
    if(notas[indice]<6){
        notas[indice]+=1
    }
}
console.log(notas)