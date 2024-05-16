
//1 - calcula area(triangulo)
var x = parseint(prompt("Informe a base do retângulo: "));
var y = parseint(prompt("Informe a altura do retângulo: "));

function CalcArea(x, y){
    this.x = x;
    this.y = y;

    this.calcularArea = function(){
        return x*y;
    }
}

var CalcArea1 = new CalcArea(base, altura);
alert("Área do retângulo: " + CalcArea1.calcularArea())

//2 - conta bancaria

class ContaBanc{
    constructor(){
        this._nomeCorrentista;
        this._banco;
        this._numcont;
        this._saldo;
    }
    setNome(value){
        this._nomeCorrentista = value;
    }
    getNome(){
        return this._nomeCorrentista;
    }
    setBanco(value){
        this._banco = value;
    }
    getBanco(){
        return this._banco;
    }
    setnumcont(value){
        this._numcont = value;
    }
    getnumcont(){
        return this._numcont;
    }
    setSaldo(value){
        this._saldo = value;
    }
    getSaldo(){
        return this._saldo;
    }
}

class contaCorrente extends ContaBanc{
    constructor(){
        super();
        this._saldoEspecial;
    }
    setSaldoEspecial(value){
        this._saldoEspecial = value;
    }
    getSaldoEspecial(){
        return this._saldoEspecial;
    }
}

class contaPoupanca extends ContaBanc{
    constructor(){
        super();
        this._juros;
        this._dtVencimento;
    }
    setJuros(value){
        this._juros = value;
    }
    getJuros(){
        return this._juros;
    }
    setDtVencimento(value){
        this._dtVencimento = value;
    }
    getDtVencimento(){
        return this._dtVencimento;
    }
}

var nome, banco, numcont, Saldo;

function recebe(){
     nome = prompt("Digite o nome: ");
     banco = prompt("Digite o banco: ");
     numcont = parseInt(prompt("Digite o número da conta: "));
     saldo = parseFloat(prompt("Digite o saldo: "))
}

var x = parseInt(prompt("Qual tipo de conta:\n\n1 = Conta corrente\n\n2 = Conta Poupança"))

if(x === 1){
    recebe();
    var saldoEspecial = parseFloat(prompt("Informe o saldo especial: "));
    var contaNovaCorrente = new contaCorrente();
    
    contaNovaCorrente.setNome(nome);
    contaNovaCorrente.setBanco(banco);
    contaNovaCorrente.setnumcont(numcont);
    contaNovaCorrente.setSaldo(saldo);
    contaNovaCorrente.setSaldoEspecial(saldoEspecial);

    alert("Número da conta: " + contaNovaCorrente.getnumcont() +
    "\nNome da conta: " + contaNovaCorrente.getNome() + "\nNome do banco: " 
    + contaNovaCorrente.getBanco() + "\nSaldo: " + contaNovaCorrente.getSaldo() + 
    "\nSaldo Especial: " + contaNovaCorrente.getSaldoEspecial());
} else{
    recebe();
    var juros = parseFloat(prompt("Informe o juros: "));
    var dataVencimento = prompt("Informe data de vencimento: ");
    var contaNovaPoupanca = new contaPoupanca();
    
    contaNovaPoupanca.setNome(nome);
    contaNovaPoupanca.setBanco(banco);
    contaNovaPoupanca.setnumcont(numcont);
    contaNovaPoupanca.setSaldo(saldo);
    contaNovaPoupanca.setJuros(juros);
    contaNovaPoupanca.setDtVencimento(dataVencimento);

    alert("Número da conta: " + contaNovaPoupanca.getnumcont() + 
    "\nNome da conta: " + contaNovaPoupanca.getNome() + "\nNome do banco: " + 
    contaNovaPoupanca.getBanco() +  "\nSaldo: " + contaNovaPoupanca.getSaldo() 
    + "\nJuros: " + contaNovaPoupanca.getJuros() + "%" + "\nData de vencimento: " 
    + contaNovaPoupanca.getDtVencimento());
}