function somar() {
    let valor1 = Number(document.querySelector('#valor1').value)
    let valor2 = Number(document.querySelector('#valor2').value)
    let soma = valor1 + valor2
    resultado.innerHTML = soma
}

function subtrair() {
    let valor1 = Number(document.querySelector('#valor1').value)
    let valor2 = Number(document.querySelector('#valor2').value)
    let subtracao = valor1 - valor2
    resultado.innerHTML = subtracao
}

function multiplicar() {
    let valor1 = Number(document.querySelector('#valor1').value)
    let valor2 = Number(document.querySelector('#valor2').value)
    let multiplicacao = valor1 * valor2
    resultado.innerHTML = multiplicacao
}

function dividir() {
    let valor1 = Number(document.querySelector('#valor1').value)
    let valor2 = Number(document.querySelector('#valor2').value)
    let divisao = Math.floor(valor1 / valor2)
    let restoDivisao = valor1 % valor2
    resultado.innerHTML = `Divisão: ${divisao.toFixed(0)} <br> Resto da divisão: ${restoDivisao}`
}   

function limparCampos() {
    location.reload()
}