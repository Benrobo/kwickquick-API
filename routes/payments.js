const express = require("express");
const router = express.Router();


const addPayments = require("../services/addPayments");



router.post("/payments", (req, res)=>{
    let data = req.body;
    return addPayments(data, res)
})

module.exports = router