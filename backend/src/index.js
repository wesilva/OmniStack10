const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://<user>:<password>@cluster0-shard-00-00-insut.mongodb.net:27017,cluster0-shard-00-01-insut.mongodb.net:27017,cluster0-shard-00-02-insut.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(cors({ origin: 'http://localhost:3000'}));//deixando só cors() libera o acesso para todo tipo de aplicação
app.use(express.json());
app.use(routes);


app.listen(2222);

// Tipos de parâmetros

// Query Params: users?search=2 - request.query (filtros, ordenação, paginação, ...)
// Route Params: users/2 - request.params (identificar um recurso na alteração ou remoção)
// Body:  request.body (Dados para criação ou alteração de um registro)
