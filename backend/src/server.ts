import app from "./app";
import database from './database';

const port = 3000;

database.sync({ force: true });



app.listen(port);
console.log(`Aplicação NODE e TS rodando da porta ${port}`);