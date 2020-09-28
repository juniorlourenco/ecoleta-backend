import express from 'express';

const app = express();

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel',
    'Junior'
];

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');

    return response.json(users);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) => {
    const user = {
        name: 'Diego',
        email: 'diego@rocketseat.com.br'
    };
    return response.json(user);
});

app.listen(3333);

