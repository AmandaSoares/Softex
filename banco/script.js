class Banco {
    constructor(conta, saldo, tipoConta, agencia) {
      this.conta = conta
      this.saldo = saldo
      this.tipoConta = tipoConta
      this.agencia = agencia
    }

    buscarSaldo() {
        return this.saldo
    }

    deposito(valor) {
        this.saldo += valor
    }

    saque(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor}
    }

    numeroConta() {
        return this.conta
    }
}

let novaConta;

function criarConta() {
    let conta = document.querySelector('#conta').value
    let tipoConta = document.querySelector('input[name="tipoConta"]:checked').value
    let agencia = document.querySelector('#agencia').value
    let deposito = parseFloat(document.querySelector('#deposito').value)
    let saldo = deposito;
    novaConta = new Banco(conta, saldo, tipoConta, agencia)
    alert('Dados cadastrados com sucesso!')
    desocultar()   
}

function depositar() {
    let valorDeposito = parseFloat(document.querySelector('#valorDeposito').value)
        novaConta.deposito(valorDeposito)
        attDados()
}

function saque(){
    let valorSaque = parseFloat(document.querySelector('#valorSaque').value)
    novaConta.saque(valorSaque)
    attDados()
}

function buscarSaldo(){
    alert('Saldo: '+ novaConta.saldo)

}

function numeroConta(){
    alert('Número da conta: '+ novaConta.conta)
    
}

function resumo() {
    attDados()
}

function attDados() {
    let dadosElement = document.getElementById('dados')
        dadosElement.innerHTML = `
          Número da Conta: ${novaConta.numeroConta()}<br>
          Tipo de Conta: ${novaConta.tipoConta}<br>
          Agência: ${novaConta.agencia}<br>
          Saldo Atual: ${novaConta.buscarSaldo()}
        `;
        dadosElement.style.display = 'block'
}

function desocultar() {
    let mostrarOperacoes = document.querySelector('#operacoes,#btns').value
    operacoes.style.display = 'block'
    
}
