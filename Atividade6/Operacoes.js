var x = prompt("Digite um numero");
var y = prompt("Digite mais um numero");

soma = ((parseFloat(x)) + (parseFloat(y))).toFixed(2);


subtracao = ((parseFloat(x)) - (parseFloat(y))).toFixed(2);


produto = ((parseFloat(x)) * (parseFloat(y))).toFixed(2);


divisao = ((parseFloat(x)) / (parseFloat(y))).toFixed(2);


resto = ((parseFloat(x)) % (parseFloat(y))).toFixed(2);
alert("A soma é " + soma + 
"\nA subtração é " + subtracao + 
"\nO produto é " + produto + 
"\nA divisão é " + divisao + 
"\nO resto é " + resto);
