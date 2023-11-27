// classes abstratas
class CasaHogwarts {    
    constructor(nomeCasa, diretorCasa, coresCasa) {
    this.nomeCasa = nomeCasa
    this.diretorCasa = diretorCasa
    this.coresCasa = coresCasa
    }

    informacoesCasa() {
        console.log(`A casa de ${this.nomeCasa} é administrada por ${this.diretorCasa} e suas cores são ${this.coresCasa}`)
    }

    selecaoCasa () {
        const alunos = [
            {nomeAluno : "Harry Potter"},
            {nomeAluno : "Hermione"},,
            {nomeAluno : "Ron Weasley"},
            {nomeAluno : "Neville"},
            {nomeAluno : "Luna"}
        ]
        const escolherAluno = Math.floor(Math.random() * alunos.length)
        console.log(`${alunos[escolherAluno].nomeAluno} foi selecionado para casa ${this.nomeCasa}`)
    }

    sorteioCasaParaCampeonatoQuadribol() {
        const casas = [ 
            {casa : "Grifinória"},
            {casa : "Sonserina"},
            {casa : "Lufa-Lufa"},
            {casa : "Corvinal"}
        ]

        const escolherCasa = Math.floor(Math.random() * casas.length)
        console.log(`A casa escolhida para representar Hogwarts no campeonato mundial de Quadribol é ${casas[escolherCasa].casa}`)
    }
}

const casa = new CasaHogwarts("Grifinória", "Minerva McGonogall", "vermelho e dourado")
casa.informacoesCasa()
casa.selecaoCasa(casa.nomeCasa)
casa.sorteioCasaParaCampeonatoQuadribol()
separador()

class Feitico {
    constructor(nomeFeitico, tipoFeitico, descricao) {
        this.nomeFeitico = nomeFeitico
        this.tipoFeitico = tipoFeitico    
        this.descricao = descricao
    }

    mostrarFeitico(){
        console.log(`O feitiço ${this.nomeFeitico} é do tipo ${this.tipoFeitico} e ${this.descricao}`)
    }

    lancarFeitico(conjurador){
        console.log(`${conjurador} irá lançar o feitico ${this.nomeFeitico}`)
    }      

    escolherConjurador() {
        const personagens = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Alvo Dumbledore', 'Severo Snape', 'Luna Lovegood', 'Neville Longbottom', 'Gina Weasley', 'Rubeus Hagrid', 'Sirius Black']
        const escolherPersonagem = Math.floor(Math.random() * personagens.length)
        return personagens[escolherPersonagem]
    }
}

const spell = new Feitico("Alohomora", "encantamento", "é usado para destrancar portas trancadas por chaves comuns, e não trancadas por magia.")
spell.lancarFeitico(spell.escolherConjurador())
spell.mostrarFeitico()
separador()

// classes concretas
class Vassoura {
    constructor(nomeVassoura, fabricante, velocidade) {
        this.nomeVassoura = nomeVassoura
        this.fabricante = fabricante
        this.velocidade = parseInt(velocidade)
    }

    informacaoVassoura() {
        console.log(`A Vassoura ${this.nomeVassoura} foi fabricada pela ${this.fabricante} e o recorde de velocidade alcançada é de ${this.velocidade} KM/H`)
    }

    atualizarRecorde(x) {
        this.velocidade = x
        console.log(`Velocidade atualizada para ${x} KM/H`);
    }

    verificarRecordista() {
        const bruxos = [
            { nome: "Harry Potter", velocidade: 300},
            { nome: "Ron Weasley", velocidade: 180 },
            { nome: "Draco Malfoy", velocidade: 520 },
        ]
    
        let maisRapido = bruxos[0]
        for (let i = 1; i < bruxos.length; i++) {
            if (bruxos[i].velocidade > maisRapido.velocidade) {
               maisRapido = bruxos[i];
            }
        }
        console.log(`O bruxo que alcancou maior velocidade com uma ${this.nomeVassoura} é o(a) senhor(a) ${maisRapido.nome}!`)
    }
}

const vassoura = new Vassoura("Nimbus 2000", "Companhia Nimbus de Vassouras de Corrida", "200")
vassoura.informacaoVassoura()
vassoura.atualizarRecorde(500)
vassoura.verificarRecordista()
separador()


class PetMagico {
    constructor(nomePet, especiePet, descricaoPet, donoPet) {
        this.nomePet = nomePet
        this.especiePet = especiePet
        this.descricaoPet = descricaoPet
        this.donoPet = donoPet
    }

    informacaoPet () {
        console.log(`${this.nomePet} é um ${this.especiePet} ${this.descricaoPet}`)
    }

    exibirDono() {
        console.log(`O dono de ${this.nomePet} é ${this.donoPet}`)
    }

    alterarDono(novoDono) {
        this.donoPet = novoDono
        console.log(`O novo dono de ${this.nomePet} é ${novoDono}`)
    }
}

const pet = new PetMagico("Bichento", "gato", "de pelagem cinza e olhos grandes", "Hermione")
pet.informacaoPet()
pet.exibirDono()
pet.alterarDono("Harry Potter")


function separador() {
    // separar o conteúdo exibido no console
    console.log("~".repeat(100));
}