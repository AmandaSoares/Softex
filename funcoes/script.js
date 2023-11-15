function coletarDados() {
    let nome = document.querySelector("#nome").value
    let idade = document.querySelector("#idade").value 
    let mostrar = dados(nome)
    let maioridade = verificarIdade(idade)
    let ocultar = document.querySelector(".ocultar")
    resultado.innerHTML = mostrar + maioridade
    ocultar.style.display = 'block'
}

// função sem parâmetro
function saudacaoMagica() {
    window.alert("Boas vindas!");
}
// função com parâmetro e retorno
function dados(n) {
     return `Olá, ${n}! `;
}
// arrow function com parâmetro e retorno
const verificarIdade = (idade) => (idade >= 17) ? 'você pode praticar magia!' : 'infelizmente você ainda não pode praticar magia!';

saudacaoMagica()