function mostrarDados() {
    // não recarregar a página
    event.preventDefault()
    // 
    let nome = document.querySelector('#nome').value
    let salario = document.querySelector('#salario').value
    let idade = document.querySelector('#idade').value
    let opcao = document.querySelector('input[name="opcao"]:checked').value 
    let valorEmReais = converterParaReal(salario)
    let dadosFormatados = `
        <p>Nome: ${nome}</p>
        <p>Salário: ${valorEmReais}</p>
        <p>Idade: ${idade} anos</p>
        <p>Graduado(a): ${opcao}</p>
    `;
    // escrever na div dados-usuario
    document.querySelector('#dados-usuario').innerHTML = dadosFormatados;
    
   
}

function confirmar() {
    alert('Cadastrado com sucesso!')
}

function cancelar() {
    let formulario = document.getElementById('formulario').value 
    formulario.reset()
}

function converterParaReal(valor) {
    return parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}