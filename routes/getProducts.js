const express = require("express");
const router = express.Router();


const getProducts = require("../services/getProducts");


const {checkAuth} = require("../middlewares/auth")


router.post("/getProducts",checkAuth, (req, res)=>{
    console.log(req.user)
    return getProducts(res)
})

module.exports = router