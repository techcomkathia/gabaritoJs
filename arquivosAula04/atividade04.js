//banco 
//gerentes: emprestar(), encerrarConta() , lista[{}]
//clientes: sacar(), depositar(), abrirConta(), lista[{}]

const banco ={
    gerentes:{
        emprestrar: function(){
            console.log('Emprestou dinheiro a 200% de juros ao mês')
        },
        encerrarConta: function(){
            console.log('Perdeu um cliente')
        },
        lista:[]
    },
    clientes:{
        sacar: function(){
            console.log('sacou')
        },
        depositar: function(){
            console.log('depositou')
        },
        abirConta: function(){
            console.log('abriu conta')
        },
        lista:[]
    },
    endereco: 'Rua Alguma Coisa'
}
