//CONEXÃO COM BANCO DE DADOS
import { Sequelize } from "sequelize";

const connection = new Sequelize('pitu', 'root', '', { host: 'localhost', dialect: 'mysql' });

export default connection;