// 4. Escreva uma função que lê o salário de um funcionário e informa o mesmo salário com um aumento de 15%


function calcularAumento(salario){
    
    salario *= 1.15
    console.log(salario)
    return salario
}

let userSalario = parseFloat(prompt('Digite seu salario'))
let salarioUser = calcularAumento(userSalario)
alert( `O salário com aumento é ${salarioUser}`)
