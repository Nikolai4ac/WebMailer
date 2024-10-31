const express = require ("express");
const accountRouter = express.Router();
const accountController = require ('../controllers/accountController');

accountRouter.get('/account', accountController);