const express = require("express");
const router = express.Router();


const addOrganization = require("../services/addOrgnization");


router.post("/register", (req, res)=>{
    let data = req.body;
    return addOrganization(data, res)
})

module.exports = router