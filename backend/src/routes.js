const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;





/* 
* Rota - recurso que estamos querendo acessar /users
/*
/* Metodos HTTP
*
* GET: Buscar uma informação no back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/*
* Tipos de parâmetros
*
* Query Params: Parâmetros nomeados  enviados na rota após o simbolo de "?" ( Filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos 
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 *  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 *  NoSQL: MongoDB, CouchDB etc
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() * Desta forma aceita qualquer tipo de banco
 */