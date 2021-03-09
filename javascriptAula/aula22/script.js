const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul


const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável

const primeiroRemove = comidas.shift();
console.log(primeiroRemove);
console.log(comidas);

// Remova o último valor de comidas e coloque em uma variável

const ultimoRemove = comidas.pop();
console.log(ultimoRemove);
console.log(comidas);
// Adicione 'Arroz' ao final da array

comidas.push('arroz');
console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao início da array


comidas.unshift('Peixe', 'Batata');
console.log(comidas);



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética

estudantes.sort();
console.log(estudantes);

// Inverta a ordem dos estudantes

estudantes.reverse();
console.log(estudantes);

// Verifique se Joana faz parte dos estudantes

const verificarJoana = estudantes.includes('Joana');
console.log(verificarJoana);


// Verifique se Juliana faz parte dos estudantes

const verificarJuliana = estudantes.includes('Juliana');
console.log(verificarJuliana);




let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul').split('div').join('li');

console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosCopiado = carros.slice();
// O comando acima (nomedaArray.slice()) clona a array original.

carros.pop();
