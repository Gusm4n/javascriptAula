// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

console.log(total)
// O total da expressão é 35.


// Crie duas expressões que retornem NaN

var nan = 24 + 'bolacha' / 5;
console.log(nan)

var nan2 = 'Tiradentes' * 78 / 35;
console.log(nan2)

// Somar a string '200' com o número 50 e retornar 250

var string1 = '200';
var cinquenta = 50;

var soma = +string1 + cinquenta;
console.log(soma)

// Incremente o número 5 e retorne o seu valor incrementado

var incremento = 5;
console.log(++incremento)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var pesoDois = numero / 2 + unidade;
console.log(pesoDois)