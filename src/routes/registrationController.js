const express = require ('express');
const regRouter = express.Router();
const registerController = require ('../controllers/registerController');

regRouter.get('/register', registerController.renderRegisterPageNoContext);

module.exports = regRouter;