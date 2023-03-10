const express = require('express');
const mongoose = require('mongoose');

//contenido de express
const app = express();

//nos permite aceptar datos en tipo json
app.use(express.json());
 
//escuchar en el lpuerto 3000
app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})

//incorporar la base de datos mongo
//1.
require('dotenv').config();
console.log(process.env);
const mongoString = process.env.DATABASE_URL
//2.
mongoose.connect(mongoString);
const database = mongoose.connection
//3.
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const routes = require('./routes/routes');
//todos nuestros endpoints empezarán desde /api
app.use('/api', routes)

