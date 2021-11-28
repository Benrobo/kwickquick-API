const express = require("express");
const router = express.Router();


const getProductsId = require("../services/getProductsId");


router.post("/getProductsId", (req, res)=>{
    let data = req.body;
    return getProductsId(data, res)
})

module.exports = router