const express = require("express");
const router = express.Router();


const updateProduct = require("../services/editProduct");


const { checkAuth } = require("../middlewares/auth")


router.put("/editProduct", checkAuth, (req, res) => {
    let data = req.body;
    return updateProduct(data, res)
})

module.exports = router