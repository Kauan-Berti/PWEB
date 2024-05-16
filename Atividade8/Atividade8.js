function inserirDados() {
    const pessoas = [];

    // Loop para inserir dados
    while (true) {
        const idade = parseInt(prompt('Digite a idade da pessoa:'));
        const sexo = prompt('Digite o sexo da pessoa (M para masculino, F para feminino):');
        const opiniao = parseInt(prompt('Digite a opinião da pessoa (1 para péssimo, 2 para regular, 3 para bom, 4 para ótimo):'));
        pessoas.push({ idade: idade, sexo: sexo, opiniao: opiniao });

        const continuar = prompt('Deseja inserir os dados de outra pessoa? (S = Sim, N = Não)').toUpperCase();
        if (continuar !== 'S') {
            break;
        }
    }

    const estatisticas = calEstatisticas(pessoas);
    alert('Estatísticas do filme:\n' +
        'Média da idade das pessoas que responderam ao questionário: ' + estatisticas.mediaIdade.toFixed(2) + '\n' +
        'Idade da pessoa mais velha: ' + estatisticas.idadeMaisVelha + '\n' +
        'Idade da pessoa mais nova: ' + estatisticas.idadeMaisNova + '\n' +
        'Quantidade de pessoas que responderam péssimo: ' + estatisticas.qtdPessimo + '\n' +
        'Porcentagem de pessoas que responderam ótimo e bom: ' + estatisticas.porcentagemOtimoBom.toFixed(2) + '%' + '\n' +
        'Número de mulheres que responderam ao questionário: ' + estatisticas.qtdMulheres + '\n' +
        'Número de homens que responderam ao questionário: ' + estatisticas.qtdHomens);
}

function calEstatisticas(pessoas) {
    somaIdade = 0;
    idadeMaisVelha = 0;
    idadeMaisNova = 0;
    qtdPessimo = 0;
    qtdOtimoBom = 0;
    qtdMulheres = 0;
    qtdHomens = 0;

    for (let pessoa of pessoas) {
        // Soma das idades
        somaIdade += pessoa.idade;

        // pessoa a mais velha
        if (pessoa.idade > idadeMaisVelha) {
            idadeMaisVelha = pessoa.idade;
        }

        // pessoa a mais nova
        if (pessoa.idade < idadeMaisNova) {
            idadeMaisNova = pessoa.idade;
        }

        // Quantidade de respostas péssimo
        if (pessoa.opiniao === 1) {
            qtdPessimo++;
        }

        // Quantidade de respostas ótimo ou bom
        if (pessoa.opiniao === 3 || pessoa.opiniao === 4) {
            qtdOtimoBom++;
        }

        // Quantidade de mulheres e homens
        if (pessoa.sexo === 'F') {
            qtdMulheres++;
        } else if (pessoa.sexo === 'M') {
            qtdHomens++;
        }
    }

    // Média da idade
    const mediaIdade = somaIdade / pessoas.length;

    // Porcentagem de repostas ótima e bom
    const porcentagemOtimoBom = (qtdOtimoBom / pessoas.length) * 100;

    return {
        mediaIdade: mediaIdade,
        idadeMaisVelha: idadeMaisVelha,
        idadeMaisNova: idadeMaisNova,
        qtdPessimo: qtdPessimo,
        porcentagemOtimoBom: porcentagemOtimoBom,
        qtdMulheres: qtdMulheres,
        qtdHomens: qtdHomens
    };
}


inserirDados();