numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5];
num = 5;

function maiorQueNum(array, num){
  var resultado = [];
  for(var i = 0 ; i < array.length ; i++){
    if(array[i] > num){
      resultado.push(array[i]);
    }  
  }
  return resultado;
}

console.log(maiorQueNum(numeros,num));
