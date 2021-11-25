const express = require("express");
const router = express.Router();


const updateProductImage = require("../services/editProductImage");


const {checkAuth} = require("../middlewares/auth")


router.put("/editProductImage",checkAuth, (req, res)=>{
    let data = req.body;
    return updateProductImage(data, res)
})

module.exports = router