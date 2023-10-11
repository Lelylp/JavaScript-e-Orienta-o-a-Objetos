const {Sequelize, DataTypes} = require('sequelize');
const config = require('../config');
const ProdutoModel = require('./models/produto');
const sequelize = new Sequelize(config.development);
const Produto = ProdutoModel(sequelize, DataTypes);
async function run(){
    try {
        
    } catch (e) {
        console.error("erro", e.message);
    }finally{
        await Produto.sequelize.close();
    }
}