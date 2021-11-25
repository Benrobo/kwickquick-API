require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({ extended: false,limit: "50mb" }));
app.use(cookieParser());

app.use("/kwickquick/api/", require("./routes/register"))
app.use("/kwickquick/api/", require("./routes/logIn"))
app.use("/kwickquick/api/all", require("./routes/getOrg"))
app.use("/kwickquick/api/all", require("./routes/getProducts"))
app.use("/kwickquick/api", require("./routes/products"))
app.use("/kwickquick/api/", require("./routes/editProduct"))
app.use("/kwickquick/api/", require("./routes/deleteProduct"))
app.use("/kwickquick/api/", require("./routes/deleteAllProducts"))

// update products
app.use("/kwickquick/api/", require("./routes/editProduct"))
app.use("/kwickquick/api/", require("./routes/editProductImage"))

const PORT = process.env.NODE_ENV | 5000

app.listen(PORT)
