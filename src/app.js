require('dotenv').config();
const express = require ('express');
const app = express();
//Required Packages
const path = require ('path');
require('colors');
//Server Config
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "../public/views/"))
//Required Routers
const indexRouter = require ('../src/routes/indexRouter');
const registerRouter = require ('../src/routes/registrationController');
const loginRouter = require ('../src/routes/loginRouter');
const homeRouter = require ('../src/routes/homeRouter');
const notFoundRouter = require ('../src/routes/notFound');
//Mounted Routers
app.use('/', indexRouter);
app.use('/', registerRouter);
app.use('/', loginRouter);
app.use('/', homeRouter);
app.use('/', notFoundRouter);
const {port} = require ('./config/Server/cfg');
app.use(express.static(path.resolve(__dirname, "../public")))

app.listen(port, (error) => {
    if (error) {
        console.log("[ERROR] something went wrong!".bgRed);
        throw error;
    } else {
        console.log(`[INFO] Server has been started succesfully!`.bgGreen);
    }
})

app.get('*', (req, res) => {
    res.status(404).redirect('/notfound');
})