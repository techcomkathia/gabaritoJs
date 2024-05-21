// criação de um objeto cep

let CEP = {
    rua: 'Nome Rua Completo',
    complento: 'Apt',
    numero: 22,
    cep: '60770055',
    imprimirCepFormatado: function(){
        return(`Rua ${this.rua} nº ${this.numero}`)
    }
}
console.log(CEP)
let cepJSON= JSON.stringify(CEP)
console.log(cepJSON)
let cepJSONparaObjeto = JSON.parse(cepJSON)
console.log(cepJSONparaObjeto)



