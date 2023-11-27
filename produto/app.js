const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config');
const ProdutoModel = require('./models/produto');

const sequelize = new Sequelize(config.development);
const Produto = ProdutoModel(sequelize, DataTypes);

async function run() {
    try {
        const produtoCriado = await Produto.create({
            nome: 'Produto A',
            preco: 19.99,
            descricao: 'Descrição do Produto A'
        });
    
        console.log('Produto criado:', produtoCriado.toJSON());
        
        const produtos = await produtoCriado.findAll();
        console.log('Produtos cadastrados', produtos.map(p => p.toJSON()))

        const produtoAtualizado = await produtoCriado.update (
            { preco: 29.99 },
            { where: { id: produtoCriado.id}}
        );

        console.log(
            'Produto atualizado:',
            produtoAtualizado[0] > 0 ? 'Atualizado com sucesso' : 'Produto não encontrado'
        );

        const produtoRemovido = await Produto.destroy({ where: { id: produtoCriado.id}});
        console.log(
            'Produto removido',
            produtoRemovido > 0 ? 'Removido com sucesso' : 'Produto não encontrado'
        );
    } catch (error) {
        console.error('Erro:', error.message);
    } finally {
        await sequelize.close();
    }
}

run();
