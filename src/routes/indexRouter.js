const express = require ('express');
const indexRouter = express.Router();
const indController= require ('../controllers/indexController');

indexRouter.get('/', indController.renderIndexPageNoContect);

module.exports = indexRouter;

