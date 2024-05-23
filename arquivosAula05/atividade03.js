// Crie um script que permita o usuário escrever 3 atividades em uma lista ordenada. Esses lista com 3 itens deverá ser inserida em uma div vazia já existente no documento

let atividades = []

for (let i = 0 ; i<=2; i++){
   atividades[i]= prompt('Digite a atividade ' + (i+1))
}

let div = document.querySelector('.container')

div.innerHTML ='' // apagar o conteúdo anterior

div.innerHTML = `
    <ol>
        <li> ${atividades[0]} </li>
        <li> ${atividades[1]} </li>
        <li> ${atividades[0]} </li>
    </ol>
`