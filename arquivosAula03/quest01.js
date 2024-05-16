// somar dois números


alert(somar2numeros())

export function somar2numeros(){
    let num1 = Number(prompt('Digite um número'))
    let num2 = Number(prompt('Digite um número'))
    console.log(num1 + num2)
    return ( num1 + num2)
    console.log('depois do retorno')
}

let soma = somar2numeros()


