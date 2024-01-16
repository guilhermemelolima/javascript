var palavra = "pepino";
var quant = 5;

function repete(valor, qtd){
 return valor.repeat(qtd);
}

console.log(repete(palavra, quant));

function repete(valor,qtd){
 for(var i = 0 ; i < qtd ; i++){
   console.log(valor);
 }
}
console.log(repete('mostarda',6));
console.log("Feijão ".repeat(5));