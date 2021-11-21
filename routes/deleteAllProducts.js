const express = require("express");
const router = express.Router();


const deleteAllProducts = require("../services/deleteAllProducts");


const {checkAuth} = require("../middlewares/auth")


router.delete("/deleteAllProducts",checkAuth, (req, res)=>{
    let data = req.body;
    return deleteAllProducts(data, res)
})

module.exports = router