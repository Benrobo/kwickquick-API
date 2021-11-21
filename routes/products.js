const express = require("express");
const router = express.Router();

const {checkAuth} = require("../middlewares/auth")
const addProducts = require("../services/addProducts");


router.post("/addProducts",checkAuth, (req, res)=>{
    let data = req.body;
    return addProducts(data, res)
})

module.exports = router