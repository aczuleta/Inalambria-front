const localConfig = require('./config/local.json')
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const http = require('http');


const app = express();
const server = http.createServer(app);


//diminuye significativamente el tamaño del cuerpo de respuesta y, por lo tanto, aumentar
// la velocidad de una aplicación web
app.use(compression());

app.use(express.static(path.join(__dirname, '../dist/inalambria-front')));

//Proteje la app de vulnerabilidades estableciendo cabeceras http
app.use(helmet());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('*', (req, res) =>
{
    res.sendFile(path.join(__dirname, '../dist/inalambria-front/index.html'));
});

const port = process.env.PORT || localConfig.port;
server.listen(port, function () {
    console.log('angular listening on http://localhost:${3900}');
});

app.use(function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public', '404.html'));
});

app.use(function (err, req, res, next) {
    console.log('Error: '+err);
    res.sendFile(path.join(__dirname, '../public', '500.html'));
});

module.exports = server;
