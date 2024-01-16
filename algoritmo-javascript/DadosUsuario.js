var usuario1 = ['Et da Estônia', 17, 170];
var usuario2 = ['Pessoa do Pântano', 39, 198];
var usuario3 = ['Homem da Lua Virada', 21, 149];
var usuario4 = ['Pequena Paulistana', 18, 171];
var usuario5 = ['Menino da Porteira', 13, 142];

function maiorAlto(usuario){
    return usuario[1] >= 18 && usuario[2] >= 170; 
}

console.log(maiorAlto(usuario1));
console.log(maiorAlto(usuario2));
console.log(maiorAlto(usuario3));
console.log(maiorAlto(usuario4));
console.log(maiorAlto(usuario5));
