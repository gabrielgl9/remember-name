var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var charactersRouter = require('./routes/characters');
var foldersRouter = require('./routes/folders');
var auth = require('./services/auth-service');

var app = express();

app.listen(3000, function() {
    console.log('escutando');
})

app.use(logger('dev'));
app.use(express.json()); // Permite receber/retornar requisições com JSON
app.use(express.urlencoded({ extended: false })); // Permite receber requisições pela URL
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Torna um diretório público

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/characters', auth.authorization, charactersRouter);
app.use('/folders', auth.authorization, foldersRouter);

module.exports = app;