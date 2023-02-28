// EXERCÍCIO 1:
const numero =  Number(prompt('Por favor digite um número'));
// const numero =  4

function recebeNumero(num) {
   let frase
   if (num % 2 === 0) {
    const mensagem = 'O número é par';
    frase = 'é par';
    return frase
   }
   frase = 'é ímpar'
   return frase
}

console.log(recebeNumero(numero));