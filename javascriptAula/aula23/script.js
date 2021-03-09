// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//     console.log(item.toUpperCase(), index, array);
// });

// const li = document.querySelectorAll('li');

// li.forEach(i => i.classList.add('ativa'));

// li.forEach(function(item) {
//   item.classList.add('ativa');
// });


// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.map((item, index, array) => {
//     console.log(item, index, array)
// });


// const arrayNumerinhos = [4, 5, 18, 189, 98, 41];
// console.log(arrayNumerinhos);

// const numerinhosQuadrado = arrayNumerinhos.map((item) => item * 2);
// console.log(numerinhosQuadrado);


  
//   const tempoAulas = aulas.map(aula => aula.min);
//   // [15, 10, 20, 25];
  
//   const puxarNomes = aula => aula.nome;
//   const nomesAulas = aulas.map(puxarNomes);
  // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']
  

//   const aulas = [10, 25, 30];

//   const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//       console.log(acumulador, item, index, array)
//   }, 0);

// const numeros = [15, 321, 47, 894, 12, 2, 32, 6,8, 121];  

// const maiorNumero = numeros.reduce((anterior, atual) => {
//      return anterior > atual ? anterior : atual
// }, 0)

// console.log(maiorNumero)

// const aulas = [
//     {
//       nome: 'HTML 1',
//       min: 15
//     },
//     {
//       nome: 'HTML 2',
//       min: 10
//     },
//     {
//       nome: 'CSS 1',
//       min: 20
//     },
//     {
//       nome: 'JS 1',
//       min: 25
//     },
//   ]




// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetoCursos = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('span').innerText;
    const horas = curso.querySelector('span:last-child').innerText;
    return {
        titulo,
        descricao,
        aulas,
        horas,
    }
});


console.log(objetoCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiores = numeros.filter(numeros => numeros > 100);
console.log(maiores);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const checarBaixo = instrumentos.some((instrumento) => {
    return instrumento === 'Baixo';
})

console.log(checarBaixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorCompras = compras.map(compra => Number.parseFloat(compra.preco.slice(3,7).replace(/[,]+/g, '.')));
console.log(valorCompras)

console.log(valorCompras.reduce((a,b) => a + b, 0));





