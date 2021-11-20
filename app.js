require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/kwickquick/api/", require("./routes/register"))


const PORT = process.env.NODE_ENV | 5000

app.listen(PORT)
