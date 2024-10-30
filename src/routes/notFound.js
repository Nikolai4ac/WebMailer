const express = require ('express');
const notFoundRouter = express.Router();
const notFoundController = require ('../controllers/notFoundController');
notFoundRouter.get('/notfound', notFoundController.renderNotFoundPage);

module.exports = notFoundRouter;