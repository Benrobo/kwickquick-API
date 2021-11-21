const express = require("express");
const router = express.Router();


const deleteProduct = require("../services/deleteProduct");


const {checkAuth} = require("../middlewares/auth")


router.delete("/deleteProduct",checkAuth, (req, res)=>{
    let data = req.body;
    return deleteProduct(data, res)
})

module.exports = router