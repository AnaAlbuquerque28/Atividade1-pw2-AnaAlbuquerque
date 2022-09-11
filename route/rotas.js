const express = require('express');
const rota = express.Rota();

rota.post('/cadastrarcategoria', (rsq, res)=>{
    res.send('Cadastro de categoria');
});

rota.get('/listarcategoria', (req, res)=>{
    res.send('litagem de categoria');
});

rota.put('/alterarcategoria', (req, res)=>{
    res.send('modificação de categoria');
});

rota.delete('/excluircategoria', (req,res)=>{
    res.send('exclusão de categoria');
});

module.exports = rota