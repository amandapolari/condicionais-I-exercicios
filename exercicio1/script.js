// EXERCÍCIO 1:
// const numero =  Number(prompt('Por favor digite um número'));
const numero =  4

function recebeNumero(num) {
   if (num % 2 === 0) {
    const mensagem = 'O número é par';
    return 'é par';
   }
   return 'é ímpar'
}

console.log(recebeNumero(numero));