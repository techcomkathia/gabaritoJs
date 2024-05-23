let titulo = document.createElement('h2')
console.log(titulo.innerText)

titulo.innerHTML = 'Sou o texto do título manipulado'
console.log(titulo.innerText)

let pai = document.querySelector('body')

pai.appendChild(titulo)