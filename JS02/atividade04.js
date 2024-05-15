// Você está gerenciando uma fila de atendimento ao cliente. Novos clientes chegam e devem ser adicionados ao final da fila. Dado um array representando a fila, adicione um novo cliente ao final da fila e imprima o estado atualizado da fila.
// Fila: 'Ana', 'Bruno' e 'Carla'

let  fila = ['Paulo', 'Maria']

fila.push('Carla') //insere no final
fila.push('Maíra')
fila.push('Nobre')

let pessoasAtendidas=[]
let pes =[]
pes= fila.shift()
pessoasAtendidas.push(pes)
console.log(fila)
console.log(pessoasAtendidas)