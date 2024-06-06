/*
* Curso de Engenharia de Software - UniEVANGÉLICA 
* Disciplina de Programação Web 
* Dev: Guilherme Aragão Silva
* DATA: 06/06/2024
*/

const express = require('express');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/carRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/cars', carRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
