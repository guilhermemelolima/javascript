var personagens = ["Hermione", "Trinity", "Leia"];
var filmes = ["Harry Potter", "Matrix", "Star wars"];
var lancamentos = [2001, 1999, 1977];

function filme(personagens, filmes, lancamentos, id)  {
  var indice = id - 1;
  if(id > 0 && id <= personagens.length){
    return personagens[indice] + " é um personagem do filme " + filmes[indice] + " que estreou no cinema em " + lancamentos[indice] + ".";
  }else{
    return "Essa não é uma opção válida.";
  }
}

console.log(filme(personagens, filmes, lancamentos, 1));
console.log(filme(personagens, filmes, lancamentos, 2));
console.log(filme(personagens, filmes, lancamentos, 3));
