// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll('.menu li');

menu.forEach(function(item){
    item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menu.forEach(function(item){
    item.classList.remove('ativo');
});

menu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelector('img');

console.log(imagens.hasAttribute('alt'))

// Modifique o href do link externo no menu

const linkExt = document.querySelector('a[href^="http"');

linkExt.setAttribute('href', 'http://www.youtube.com.br');
console.log(linkExt);