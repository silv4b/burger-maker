const express = require('express');
const serveStatic = require('serve-static');

const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// aqui nós configuramos a parta dist (gerada para produção) pra server os arquivos do aplicativo.
app.use('/', serveStatic(path.join(__dirname, '/dist')));

// esta * rota serve para o projeto em diferentes rotas de página, exceto root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port);
console.log(`app is listening on port: ${port}`);