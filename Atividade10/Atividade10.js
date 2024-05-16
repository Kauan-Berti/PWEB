var number = [];
if (x = 0, x < 3, x++) {
    number[x] = prompt("Digite um número" + x);

}
function ordenaNum(ordem){
    ordem.sort(funcition(a,b){return a-b});
    alert(ordem);

    for(y = 0; y < 3; y++){
        alert("O " + (y+1) + "º número em ordem crescente é: " + matriz[y] );
    } 
} 

ordenaNum(number){
    alert(number);
}

var txt = prompt("Escreva uma palvra");

function palindromo(txt) {
    txt = txt.replace(/\s/g, '').toLowerCase();
    reverterString = txt.split('').reverse().join('');

    if (txt === reverterString) {
        return ("é um Palindromo");
    } else {
        return ("não é um Palindromo");
    }
}

alert("A palavra " + palindromo(txt));

var varNumberA = parseInt(prompt("Digite o primeiro valor: "));
var varNumberB = parseInt(prompt("Digite o segundo valor: "));
var varNumberC = parseInt(prompt("Digite o terceiro valor: "));


function triangulo(varNumberA, varNumberB, varNumberC) {
    if (Math.abs(varNumberB - varNumberC) < varNumberA && varNumberA < (varNumberB + varNumberC) && Math.abs(varNumberA - varNumberC) < varNumberB && varNumberB < (varNumberA + varNumberC) && Math.abs(varNumberA - varNumberB) < varNumberC && varNumberC < (varNumberA + varNumberB)) {
        if (varNumberA == varNumberB && varNumberB == varNumberC) {
            return ("É um triangulo equilatero");
        } else if (varNumberA != varNumberB && varNumberB != varNumberC && varNumberA != varNumberC) {
            return ("É um triangulo escaleno");
        } else {
            return ("É um trinagulo isoceles");
        }
    } else {
        return ("Não é triangulo")
    }


}

alert("Números digitados: " + triangulo(varNumberA, varNumberB, varNumberC));

