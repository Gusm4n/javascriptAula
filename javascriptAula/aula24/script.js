// const perimetro = new Function('lado', 'return lado * 4');

// function hello() {
//     console.log('Olá, amigo!')
// }

// hello.call();


// function descricaoCarro() {
//     console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro();


// function Dom(seletor){
//     this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe){
//     this.element.classList.add(classe)

// }

// const ul = new Dom('ul')

// const li = {
//     element: document.querySelector('li')
// }

// ul.ativo('ativo')

// console.log(ul)

// const frutas = ['Uva', 'Maçã', 'Chiclete'];

// Array.prototype.mostrarThis = function() {
//     console.log();
// }

// Array.prototype.pop.call(frutas);






// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const parag = document.querySelectorAll('p');

const totalCarac = Array.prototype.reduce.call(parag, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0)

console.log(totalCarac);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElem(tag, classe, conteudo){
    const elemento = document.createElement(tag);
    elemento.classList.add(classe);
    return elemento;
}

console.log(criarElem('li', 'abdul'))


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
