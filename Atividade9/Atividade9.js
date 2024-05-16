function inserirDados() {
    const pessoas = [];

    // Loop para inserir dados
    while (true) {
        var altura = parseFloat(prompt('Digite a Altura:'));
        var peso = parseInt(prompt('Digite o Peso atual:'));
        pessoas.push({ altura: altura.toFixed(3), peso: peso.toFixed(1) });

        var continuar = prompt('Deseja inserir os dados de outra pessoa? (S = Sim, N = Não)').toUpperCase();
        if (continuar !== 'S') {
            break;
        }
    }

    const estatisticas = calEstatisticas(pessoas)
}

function calEstatisticas(pessoas) {

    for (let pessoa of pessoas) {
        IMC = 0;
        IMC = pessoa.peso / Math.pow(pessoa.altura,2);

        if (IMC < 18.5) {
            alert("Magreza");
        }
        else if (IMC < 25) {
            alert("Normal");
        }
        else if (IMC < 30) {
            alert("Sobrepeso");
        }
        else if (IMC < 40) {
            alert("Obesidade");
        }
        else {
            alert("Obesidade Grave, se cuide!!!");
        }


    }

    return {
        altura: altura,
        peso: peso
    };
}


inserirDados();