// crie uma classe no css e permita que o usuário decida se quer aplicar a classe ao elemento do html ou não

function aplicarNovaClasse(){
    let escolha = confirm('Deseja aplicar a classe vermelho ao primeiro título principal?')

    if(escolha){
        let tituloUm = document.querySelector('h1')
        //ou 
        tituloUm = document.getElementsByTagName('h1')[0]

        tituloUm.classList.add('vermelho')       
    }
}

aplicarNovaClasse()