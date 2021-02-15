// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var felipe = {
    nome: 'Felipe',
    sobrenome: 'Gusmão',
    idade: 24,
    nacionalidade: 'Brasileiro',
    nomeCompleto(){
        return console.log(`${felipe.nome} ${felipe.sobrenome}`)
    }
}

// Crie um método no objeto anterior, que mostre o seu nome completo

//Método criado na linha 10

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  
  carro.preco = 3000;
  console.log(carro)

  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var Bethoven = {
      especie: 'cachorro',
      raca: 'labrador',
      cor: 'preto',
      latir(pessoa){
          if(pessoa === 'Homem'){
            console.log('Bethoven late')
          }else{
              console.log('Bethoven não late')
          }
      }
  }
  