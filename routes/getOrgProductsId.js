const express = require("express");
const router = express.Router();


const getOrgProductsId = require("../services/getOrgProductsId");


const {checkAuth} = require("../middlewares/auth")


router.post("/getOrgProductsId", (req, res)=>{
    let data = req.body;
    return getOrgProductsId(data,res)
})

module.exports = router