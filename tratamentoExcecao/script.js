let numero1 = prompt('Digite o primeiro valor: ')
let numero2 = prompt('Digite o segundo valor: ')

function divisao(x,y) {
    let valor1 = parseFloat(x);
    let valor2 = parseFloat(y);

  if (isNaN(valor1) || isNaN(valor2) || valor2 === 0) {
    throw new Error('O divisor não pode ser zero.');
  }
    let resultado = valor1/valor2
    alert(resultado.toFixed(2))
}

try {
    divisao(numero1, numero2);
  } catch (error) {
    alert('Erro: ' + error.message);
  } finally {
    alert('Operação concluida!')
  }