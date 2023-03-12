/*
import express, { Application, RequestHandler } from "express";
import cors from 'cors';
import bp from 'body-parser';
import promBundle from 'express-prom-bundle';
import api from "./api"; 
*/

const express = require('express');
//const Application = express.Application();
//const RequestHandler = express.RequestHandler();

const mongoose = require('mongoose');
const cors = require('cors');
const bp = require('body-parser');
const promBundle = require('express-prom-bundle');
const api = require('./api');




//contenido de express
const app = express();
const port = 5000;



//const metricsMiddleware = promBundle({includeMethod});
//pp.use(metricsMiddleware);

app.use(cors());
//nos permite aceptar datos en tipo json
app.use(bp.json());
app.use(express.json());


app.use("/api", api)

app.listen(port, () => {
    console.log('Restapi listening on '+ port);
}).on("error",(error)=>{
    console.error('Error occured: ' + error.message);
});


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

//const routes = require('./routes/routes');
//app.use('/api', routes)
//AHORA API.JS HACE LA MISMA FUNCION QUE ROUTES.JS
