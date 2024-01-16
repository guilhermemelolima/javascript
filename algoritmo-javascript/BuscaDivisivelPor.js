function buscaDivisivelPor(array, num){
  const listNum = [];

  for(let i = 0 ; i < array.length ; i++){
    if(array[i] % num === 0 && num !== 0){
      return array[i];
    }
  }
  return "Nenum valor encontrado";

}
console.log(buscaDivisivelPor([ 9, 4, 120, 128, 42, 16, 302, -5],2));
