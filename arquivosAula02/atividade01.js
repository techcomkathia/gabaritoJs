// 1. Crie uma estrutura que receba o nome, idade e curso de um aluno. Adicione essas informações em um array e exiba o array no console.


let nome = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')
let curso = prompt('Digite seu curso')
let aluno = [nome, idade, curso]
//ou
//criando um array vazio e depois alimentando com novas informações por indice
let aluno2= []
aluno2[0]= prompt('Digite seu nome')
aluno2[aluno2.length]=  prompt('Digite sua idade')
aluno2[aluno2.length] = prompt('Digite seu curso')

let turma = [['nome', 10, 'dfsjs'], ['nome', [10,20,30], 'dfsjs']]



console.log(turma[1][1])