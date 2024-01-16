# algoritmo-javascript

### Objetivo

Neste repositório estão presente alguns algoritmos simples em SavaScript que foram usados como uma forma de praticar a linguagem e treinar lógica de programação.

## Exercícios

Uma academia precisa separar grupos de pessoas tendo como base a sua altura para que dessa forma consiga formar grupos para as aulas de zumba. Temos um array que lista a altura de cada aluno da academia, e outros 3 arrays (Grupo A, B e C) que são classificados da seguinte forma: 

>grupoA - Alunos com altura entre 150 a 159

>grupoB - Alunos com altura entre 160 a 169

>grupoC - Alunos com altura de 1.70 ou mais

Seu trabalho é pegar cada valor do array alunos e colocar o valor correspondente em seu respectivo grupo. Para esse exercício, você precisará usar loops, condicionais e funções de arrays. 

Exemplo: [Academia.js](Academia.js)

---

Programe uma função buscarDivisivelPor que recebe dois parâmetros, um array de números e um número de teste, 
retornando como resposta o primeiro número do array que seja divisível pelo número dado e diferente de zero. 
Caso nenhum número do array passe no teste, retorne o texto "Nenhum número válido encontrado!".
Dica:

Exemplo: [BuscaDivisivelPor.js](BuscaDivisivelPor.js)

--

Em um site sobre cinema, os visitantes cadastrados podem dar notas de 0 a 5 para um filme que ele tenha assistido. Cada filme tem um grande array de notas atribuídas pelos visitantes. ontudo, além de dar notas para os filmes, os visitantes querem ver o que as outras pessoas acharam do filme! É aí que você entra com seu código:

Escreva uma função calculaGostos(notas)

Essa função deve ser escrita para receber somente um parâmetro: um array de notas. Ela deve retornar também um array com três elementos:

O primeiro, com a quantidade de notas iguais a 0 ou 1. Seriam os que não gostaram do filme O segundo, com a quantidade de notas iguais a 2 ou 3. Seriam os que acharam o filme mediano O terceiro, com a quantidade de notas iguais a 4 ou 5. Seriam os que gostaram do filme.

Exemplo: [Cinema.js](Cinema.js)

---

Crie um sistema para calcular a comissão dos vendedores de uma loja. Crie uma função que tenha dois argumentos: preço e porcentagem de comissão.

Exemplo: [Comissao.js](Comissao.js)

---

Em uma  academia está acontecendo um cadastro de vários usuários contendo as seguintes informações: nome, idade e altura. E para realizar um determinado treino, existe alguns requisitos: Ter 18 anos ou mais e ter uma altura igual ou maior a 1,70.

Crie uma função chamada maiorAlto que retorne verdadeiro (true) caso ele atenda os requisitos, e falso (false) para o contrário. Nessa função você irá receber um parâmetro que será um array, contendo na primeira posição o nome, segunda posição a idade do aluno e na terceira contendo a altura em Centímetros.

Exemplo

```javascript
maiorAlto(["Aluno incrível", 18, 170]) // retorna true
maiortAlto(["Aluno baixo", 17, 150]) // retorna false
```

Exemplo: [DadosUsuario.js](DadosUsuario.js)

---

No fim de semana o elevador do nosso prédio quebrou, restringindo muito o fluxo de pessoas. Considerando isso, apenas os moradores dos apartamentos com número par poderão usar o elevador. Escreva um código que, com base na variável moradores nos informe quais moradores poderão utilizar o elevador. O número do apartamento é a sua posição no array, e o nome do morador é o valor.

Imprima no console a lista a seguinte frase: 
>'O morador ' + nome do morador + ' pode usar o elevador'

Exemplo: [Elevador.js](Elevador.js)

---

Um estacionamento deseja automatizar a cobrança de mensalistas. Para isso decidiu simplificar a forma de calcular o valor devido pelo seu cliente. A quantia a ser paga pelos seus usuários depende do número de entradas que o veículo realiza no estacionamento. A cada entrada, a placa do veículo é registrada. Ao final do mês, conta-se o número de entradas que o veículo realizou e faz-se o seguinte cálculo:

Se o motorista realizou até 20 entradas, ele deve pagar R$ 10,00 por entrada realizada. Da vigésima primeira entrada em diante, cada entrada custa R$ 5,00 ao cliente. Agora, você deve ajudar na automatização da cobrança escrevendo duas funções. A primeira função se chama calcularNumeroDeEntradas(placa). Ela deve receber 
um único parâmetro que representa a placa de um carro. A função deve retornar o número de entradas que esse carro realizou no estacionamento. Em outras palavras, o número de vezes que a placa passada como parâmetro aparece no array placas.

A segunda função se chama calcularValorDevido(placa). Ela deve receber um único parâmetro que representa a placa de um carro. A função deve calcular o valor que o proprietário do carro tem que pagar segundo a política de preços estabelecida. Naturalmente, será necessário utilizar a primeira função dentro da segunda.

Exemplo: [Estacionamento.js](Estacionamento.js)

---

Programe uma função maiorQueNum que busca em um dado array apenas os números maiores do que o número fornecido no segundo parâmetro da função e retorne um novo array apenas com esses números.

Exemplo:

```javascript
numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]
num = 5
maiorQueNum(numeros, num); // retorna [10, 7, 128, 42, 300]
```
Exemplo: [MaiorQueNum.js](MaiorQueNum.js)

---

Programar uma função filme que recebe três arrays com os nomes de personagens, filmes e ano de estréia no cinema. A função deve receber também um valor de id escolhido pelo usuário com 
intervalo de 1 até o tamanho de um dos arrays fornecidos e retornar uma frase com o seguinte modelo: 

>"personagem é um personagem do filme filme que estreou no cinema em lançamento." 

Se o valor de id for inválido, a função deve retornar a frase 
>"Essa não é uma opção válida."

Exemplo: [Personagens.js](Personagens.js)

---

Crie uma função que receba dois valores, o primeiro será uma palavra qualquer, e o segundo será a quantidade de vezes que o sistema irá imprimir essa palavra.

Exemplo: [RepetindoPalavras.js](RepetindoPalavras.js)

---


Programe uma função series que recebe dois parâmetros, um prefixo com o nome da série e um array com a lista de todos os episódios da série. A função deve retornar um novo array com a lista de episódios iniciando com o nome da série.

Exemplo: Dadas as variáveis abaixo:

```javascript
harryPotterPrefixo = "Harry Potter";
harryPotterSeries = [
  "e a Pedra Filosofal",
  "e a Câmara Secreta",
  "e o Prisioneiro de Azkaban",
  "e o Cálice de Fogo",
  "e a Ordem da Fênix",
  "e o Enigma do Príncipe",
  "e as Relíquias da Morte"
];
```

A função deve retornar como resultado o seguinte array:

```javascript
resultado = [
  "Harry Potter e a Pedra Filosofal",
  "Harry Potter e a Câmara Secreta",
  "Harry Potter e o Prisioneiro de Azkaban",
  "Harry Potter e o Cálice de Fogo",
  "Harry Potter e a Ordem da Fênix",
  "Harry Potter e o Enigma do Príncipe",
  "Harry Potter e as Relíquias da Morte"
];
```

Exemplo: [Serie.js](Serie.js)
