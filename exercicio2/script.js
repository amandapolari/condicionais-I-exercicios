// EXERCÍCIO 2:

// Usando prompt: (falta testar os booleans)
const valorIdade = Number(prompt('Digite a sua idade:'));5

const terminouEnsinoMedio = Number(confirm('Terminou o ensino médio, se sim clique em "ok", senão, clique em "cancelar"'));

const cursandoFaculdade = Number(confirm('Está cursando faculdade, se sim clique em "ok", senão, clique em "cancelar"'));

// Valores chumbados:
// const valorIdade = 17;
// const terminouEnsinoMedio = true;
// const cursandoFaculdade = false;

// Função que faz a checkagem:
function verificaIdadeEducacao(idade, ensinoMedio, ensinoSuperior){
    if(idade>=18){
        console.log('A pessoa é maior de idade');
    } else {
        console.log('A pessoa não é maior de idade');
    }

    if(ensinoMedio){
        console.log('A pessoa terminou o ensino médio');
    } else {
        console.log('A pessoa não terminou o ensino médio');
    }

    if(!ensinoSuperior){
        console.log('A pessoa não está cursando alguma faculdade');
    } else {
        console.log('A pessoa está cursando alguma faculdade');
    }
}

verificaIdadeEducacao(valorIdade, terminouEnsinoMedio, cursandoFaculdade);