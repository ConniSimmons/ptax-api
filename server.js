// requre express, dotenv, mongoose
const express = require('express');
require('dotenv').config();
const port = require('./config').PORT;
const cors = require('cors');

// import my database connection settings
const db = require('./db');

//tell the database to actually connect:
db();

//import my generic route generator files
const routerGen = require('./api/router')
const modelGen = require('./api/dal');

//import my schemas
const fpriceSchema = require('./api/models/fprice.model');
const fprodSchema = require('./api/models/fprod.model');
const mpriceSchema = require('./api/models/mprice.model');
const mprodSchema = require('./api/models/mprod.model');
const nettaxSchema = require('./api/models/nettax.model');

// create models for all of my schemas
const fprice = modelGen('fprice', fpriceSchema);
const fprod = modelGen('fprod', fprodSchema);
const mprice = modelGen('mprice', mpriceSchema);
const mprod = modelGen('mprod', mprodSchema);
const nettax = modelGen('nettax', nettaxSchema);

// get constants from my settings file
let {
    PORT, 
    DBNAME, 
} = require('./config');

// define the app
const server = express();
server.use(express.json());
server.use(cors());

// create express router object for the project
const router = express.Router();
const uiRouter = express.Router();

// tell the app to use our api routes
server.use('/', routerGen(fprice));
server.use('/', routerGen(fprod));
server.use('/', routerGen(mprice));
server.use('/', routerGen(mprod));
server.use('/', routerGen(nettax));












//////////////////////
// logger, linstener
const logger = (req, res, next) => {
    console.log(req.method, req.path);
    next();
  }
  server.use(logger);
  server.use(express.json());


//lustener
server.listen(5555, (err) => {
    if (err) {
        console.log('Error starting server: ', err);
    }
    console.log(`${DBNAME} is listening on port ${PORT}.`);
});
