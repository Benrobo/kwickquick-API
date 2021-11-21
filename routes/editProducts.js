const express = require("express");
const router = express.Router();


const editProductDetails = require("../services/editProduct");


const {checkAuth} = require("../middlewares/auth")


router.put("/editProduct",checkAuth, (req, res)=>{
    let data = req.body;
    return editProductDetails(data, res)
})

module.exports = router