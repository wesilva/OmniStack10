const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://wellingtonti23:23081991@cluster0-insut.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(express.json());
app.use(routes);


app.listen(2222);

// Tipos de parâmetros

// Query Params: users?search=2 - request.query (filtros, ordenação, paginação, ...)
// Route Params: users/2 - request.params (identificar um recurso na alteração ou remoção)
// Body:  request.body (Dados para criação ou alteração de um registro)