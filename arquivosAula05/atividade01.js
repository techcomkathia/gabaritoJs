
function alterarTerceiroP(){
    let todosP = document.querySelectorAll('p')
 // let todosP = document.getElementsByTagName('p')

    let p3 = todosP[2]

    p3.innerText = prompt('Digite o texto para o parágrafo 3')
} 

alterarTerceiroP()