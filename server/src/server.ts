import express from 'express';
import cors from 'cors';
import routes from './routes';


const app = express();

//  Listagem de Rotas:
//    http://localhost:3333/users
//    http://localhost:3333/contacts

//  Métodos HTTP:
//    GET:    Buscar ou listar uma informação
//    POST:   Criar alguma nova informação
//    PUT:    Atualizar uma informação existente
//    DELETE: Deletar uma informação existente

//  Método: GET
//  ==================================================
//    app.get('/users', (request, response) => {
//
//     const users = [
//        { name: 'Isaque', age: 18 },
//        { name: 'Diego', age: 16 },
//        { name: 'Lucas', age: 28 },
//      ];
//
//      return response.json(users);
//    });
//  ===================================================


// Método: POST
//  ====================================================
//    app.post('/users', (request, response) => {
//
//      const users = [
//        { name: 'Isaque', age: 18 },
//        { name: 'Diego', age: 16 },
//        { name: 'Lucas', age: 28 },
//     ];
//
//      return response.json(users);
//    });
//  ====================================================

// Este request fará a conversão do nosso resquest.body pra JSON
app.use(express.json());

//  Corpo (Request Body): Dados para criaçao ou atualizaçào de um registro
//    Route Params:   Identificar qual recurso eu quero atualizar ou deletar
//    Query Params:   Paginação, filtros, ordenação


// Request Body: Route Params
//  ====================================================
//    app.delete('/users/:id', (request, response) => {
//      console.log(request.params);
//
//      const users = [
//        { name: 'Isaque', age: 18 },
//        { name: 'Diego', age: 16 },
//        { name: 'Lucas', age: 28 },
//      ];
//
//      return response.json(users);
//    });
//  ====================================================


// Request Body: Query Params
//  ====================================================
//    app.get('/users', (request, response) => {
//      console.log(request.query);
//
//      const users = [
//        { name: 'Isaque', age: 18 },
//        { name: 'Diego', age: 16 },
//        { name: 'Lucas', age: 28 },
//      ];
//
//      return response.json(users);
//    });
//  ====================================================

//Serve para o front-end e o back-end se comunicarem através de endereços locais diferentes
app.use(cors());

//Rota modificada para ./routes.ts
app.use(routes);


app.listen(3333);