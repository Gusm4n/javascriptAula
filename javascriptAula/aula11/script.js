// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img');
console.log(Array.from(imagens));

// Retorne no console apenas as imagens que começaram com a palavra imagem

const img = document.querySelectorAll('[src^="img/imagem"]');
console.log(Array.from(img));

// Selecione todos os links internos (onde o href começa com #)

const links = document.querySelectorAll('[href^="#"]');
console.log(Array.from(links));

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiro = document.querySelector('.animais h2');
console.log(primeiro);

// Selecione o último p do site

const ultimo = document.querySelectorAll('p:last-child');
console.log(ultimo[ultimo.length -1]);
