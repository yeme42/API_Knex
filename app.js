const dont = require('dotenv').config()
const express = require('express')
const app = express()
const knex = require('knex')
const config = require('./db');
const db = knex(config);

const port = process.env.DB_PORT

app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });

app.get('/',(req, res)=>{
    res.send('hola mundo')
})

app.get('/items', (req, res)=>{
    db.select('*')
  .from('usuarios')
  .then((rows) => {
    res.send(rows)
  })
  .catch((error) => {
    console.error('ERROR AL OBTENER DATOS ', error);
    res.status(500).json({ error: 'Error al obtener usuario' });
  })


   
});