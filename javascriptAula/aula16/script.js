// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');

const cloneMenu = menu.cloneNode(true);

const copy = document.querySelector('.copy');

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const firstDt = document.querySelector('.faq');

const dl = firstDt.querySelector('dt');
console.log(dl);


// Selecione o DD referente ao primeiro DT

const dd = dl.nextElementSibling;
console.log(dd);

// Substitua o conteúdo html de .faq pelo de .animais

const contFaq = document.querySelector('.faq');

const contTransf = contFaq.innerHTML;
// console.log(contTransf);


const contAni = document.querySelector('.animais');

const aniTransf = contAni.innerHTML;
// console.log(aniTransf)
contFaq.replaceChild(contFaq, contAni);