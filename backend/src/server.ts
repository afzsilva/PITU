import app from "./app";
import database from './database';

const port = 3001;

database.sync();//banco

app.listen(port);
console.log(`Aplicação NODE e TS rodando da porta ${port}`);