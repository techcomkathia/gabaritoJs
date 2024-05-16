//Continuando a questão anterior, final do dia, você precisa remover o último cliente que ficou na fila, pois o atendimento não poderá ser realizado. Dado um array representando a fila de atendimento, remova o último cliente da fila e imprima o nome do cliente removido, além do estado atualizado da fila.
//£
let  filaDia01 = ['Paulo', 'Maria', 'João', 'Alice']
// pessoas que já foram atendidas no dia 01
let  atendidosDia01=[] 

// retirando do início da fila e armazenando em uma variável
pessoaAtendida= filaDia01.shift() 

// insere no final da fila dos atendidos
atendidosDia01.push(pessoaAtendida) 

//mostra as duas filas
console.log(filaDia01)
console.log(atendidosDia01)

// removendo a última pessoa que não poderá ser atendida hoje 
//salvando o retorno em uma variável 
let naoAtendidoHj = fila.pop()

//mostrando a mensagem com o nome do cliente
console.log(`O cliente ${naoAtendidoHj} não foi atendido no dia de hoje. Será realocado para atendimento amanhã, de forma preferencial como o primeiro da fila.`)

// atendimento no próximo dia
// fila de atendimento para o próximo dia
let filaDia02 = ['Ana']
// adicionando o cliente não atendido na frente de todos. Prioridade
filaDia02.unshift(naoAtendidoHj) 
