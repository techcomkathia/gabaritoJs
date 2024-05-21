// 1.1. Crie um objeto onibus;
// 1.2. Com as propriedades rodas = 8;
// 1.3. Limite de passageiros = 40;
// 1.4. Portas = 2;
// 1.5. Imprima todas as propriedades no console;


let onibus = {
    rodas: 8 ,
    limitPassageiros: 40,
    portas: 2
}

console.log(onibus.rodas)
console.log(onibus.limitPassageiros)
console.log(onibus.portas)

for (chave in onibus){
    console.log(` ${chave} = ${onibus[chave]}`)

}
// alterando o valor de uma chave já criada
onibus.portas = 3

console.log(onibus)
//criando uma nova chave/propriedade de um objeto
onibus.janelas = 20
console.log(onibus)
// deletando uma propriedade/chave de um objeto
delete onibus.janelas
console.log(onibus)