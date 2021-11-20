const express = require("express");
const router = express.Router();

const {checkAuth} = require("../middlewares/auth")
const {genRefreshToken} = require("../helpers/index")
const checkOrgAuth = require("../services/checkOrgAuth");

router.post("/login", (req, res)=>{
    let data = req.body;
    return checkOrgAuth(data, res)
})

module.exports = router