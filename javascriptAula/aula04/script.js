// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao);
//O valor retornado é 3.


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';

if(nome){
    console.log(true)
}else{
    console.log(false)
}

var idade = 28;

if(idade){
    console.log(true)
}else{
    console.log(false)
}

var possuiDoutorado = false;

if(possuiDoutorado){
    console.log(true)
}else{
    console.log(false)
}

var empregoFuturo;

if(empregoFuturo){
    console.log(true)
}else{
    console.log(false)
}

var dinheiroNaConta = 0;

if(dinheiroNaConta){
    console.log(true)
}else{
    console.log(false)
}


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil >= china){
    console.log('O Brasil tem mais habitantes que a china');
}else{
    console.log('A China tem mais habitantes que o Brasil');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

//Irá aparecer 'Falso'

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

//Irá aparecer 'Cão'