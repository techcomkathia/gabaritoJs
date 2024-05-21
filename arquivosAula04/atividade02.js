// produto :
//nome, imagem, preço, qtdEstoque, disponibilidade
// Loja:
//4 produtos

//loja = []
//produto={}

produto1={
    nome:'maçã',
    imagem:'url',
    preco: 10.90,
    qtd:50,
    disponibilidade: 'imediata'
}

produto2={
    nome:'uva',
    imagem:'url',
    preco: 16,
    qtd:50,
    disponibilidade: 'imediata'
}

produto3={
    nome:'melão',
    imagem:'url',
    preco: 10.90,
    qtd:50,
    disponibilidade: 'imediata'
}

produto4={
    nome:'maçã',
    img:'url',
    preco: 10.90,
    qtd:50,
    disponibilidade: 'imediata'
}
let loja ={}
loja.produtos = [produto1, produto2, produto3, produto4]

// for (let nProduto=1; nProduto<=1; nProduto++){
//     let prod = {
//         nome: prompt(`Nome prod ${nProduto}`),
//         imagem:prompt(`imagem prod ${nProduto}`),
//         preco: prompt(`Preço prod ${nProduto}`),
//         qtd:prompt(`Quantidade prod ${nProduto}`),
//         disponibilidade:prompt(`Disponibilidade prod ${nProduto}`)
//     }

//     loja.push(prod)
// }

loja.funcionarios = [{ nome: 'Ana', cargo:'Atendente'}]

function criarNovaCategoria(nome){
    loja[nome] = []
}

criarNovaCategoria('filiais')

loja.filiais.push({endereço:'Rua', qtdFunc: 60})