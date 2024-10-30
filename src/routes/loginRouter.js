const express = require ('express');
const loginRouter = express.Router();
const loginController = require ('../controllers/loginController');

loginRouter.get('/login', loginController.renderLoginPageNoContext);

module.exports = loginRouter;