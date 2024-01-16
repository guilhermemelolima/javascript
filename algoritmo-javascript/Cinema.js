function calculaGostos(nota){
    var nNaoGostaram = 0;
    var nMediano = 0;
    var nGostaram = 0;
    
    for(var i = 0 ; i < nota.length ; i++){
      if( nota[i] == 1 || nota[i] == 0){
        nNaoGostaram++;
      }else if(nota[i] == 2 || nota[i] == 3){
        nMediano++;
      }else if(nota[i] == 4 || nota[i] == 5){
        nGostaram++;
      }
    }
    return [nNaoGostaram, nMediano, nGostaram];
}

var notas = [1,3,4,1,0,3,5,1,2,0,3,4,3,5,1,2,4,3,2,4,5,1,4,1,0,2,3,4,0,1];

var result = calculaGostos(notas);

console.log("Não gostaram: " + result[0]);
console.log("Acharam mediano: " + result[1]);
console.log("Gostaram: " + result[2]);
