//CONEXÃO COM BANCO DE DADOS
import { Sequelize } from "sequelize";

//const connection = new Sequelize('pitu', 'root', '', { host: 'localhost', dialect: 'mysql' });
const connection = new Sequelize('mysql://root:mysql20pitu_ML@localhost:3306/pitu');

export default connection;