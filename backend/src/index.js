const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //Informar a aplicação que vamos receber o corpo das requisições em json(converter)
app.use(routes);

app.listen(3333);