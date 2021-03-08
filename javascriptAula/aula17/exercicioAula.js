// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//       console.log(this.nome + ' andou');
//     }
//   }

function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
}
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  
  const Joao = new Pessoa('João', 20);

  const Maria = new Pessoa('Maria', 25);

  const Bruno = new Pessoa('Bruno', 15);
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //

  function Dome(selector) {
    const element = document.querySelector(selector);
    this.ativo = function(classe) {
      element.classList.add(classe);
    };
    this.remove = function(classe) {
      element.classList.remove(classe)
    }
  }

  const adede = new Dome('ul');
  adede.remove();
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
  