const express = require("express");
const router = express.Router();


const getOrgProducts = require("../services/getOrgProducts");


const {checkAuth} = require("../middlewares/auth")


router.post("/getOrgProducts",checkAuth, (req, res)=>{
    let data = req.body;
    console.log(data)
    return getOrgProducts(data,res)
})

module.exports = router