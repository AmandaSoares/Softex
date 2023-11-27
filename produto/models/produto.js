// models/produto.js
module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        nome: {
            type: DataTypes.STRING,
            allowNull: true
        },
        preco: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    })

    return Produto;
}