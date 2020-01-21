'use strict'

const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const propierties = require('./config/propierties');
const DB = require('./config/db');
const { mongoose } = require('./config/db');

var path=require('path')

//instancia base

DB();

const bodyParse=require('body-parser')
const bodyParserURLEncoded = bodyParse.urlencoded({extended:true})

app.use(bodyParse.json())
app.use(bodyParserURLEncoded)
// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use('/',express.static('cliente',{redirect:false}));
app.use(cors({origin: 'http://68.66.207.7'}));
//app.use(cors({origin: 'http://localhost:4200'}));


app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/personas', require('./routes/persona.routes'));
app.use('/api/ley', require('./routes/ley.routes'));
app.use('/api/rol', require('./routes/rol.routes'));
app.use('/api/ciudadano', require('./routes/ciudadano.routes'));
app.use('/api/interaccion', require('./routes/interaccion.routes'));
app.use('/api/historial', require('./routes/historial.routes'));
app.use('/api/votos', require('./routes/votos.routes'));
app.use('/api/articulos', require('./routes/articulo.routes'));
app.use('/api/comentarios', require('./routes/comentario.routes'));
app.use('/api/publicacionley', require('./routes/publicacionLey.routes'));




app.get('*',function(req,res,next){
    res.sendFile(path.resolve('cliente/index.html'))
  });

// starting the server
app.listen(propierties.PORT,()=>console.log(`server runing on port ${propierties.PORT}`))
