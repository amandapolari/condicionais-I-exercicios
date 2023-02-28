const nacionalidade = prompt('Escreva aqui sua nacionalidade');
const nacionalidadeCorrigida = nacionalidade.toLowerCase();

function verificaNacionalidade(valorNacionalidade) {
    let mensagem = `A nacionalidade do usuário é ${valorNacionalidade}`
    
    if(valorNacionalidade==='brasileira'){
        console.log(mensagem);
    }else if(valorNacionalidade==='argentina') {
        console.log(mensagem);
    }else if(valorNacionalidade==='uruguaia') {
        console.log(mensagem);
    }else if(valorNacionalidade==='chilena') {
        console.log(mensagem);
    }else if(valorNacionalidade==='colombiana') {
        console.log(mensagem);
    } else {
        console.log('Nacionalidade não encontrada')
    }
}

verificaNacionalidade(nacionalidadeCorrigida)