const express = require("express");
const router = express.Router();


const getOrganization = require("../services/getOrg");


const {checkAuth} = require("../middlewares/auth")


router.post("/getOrganizations",checkAuth, (req, res)=>{
    console.log(req.user)
    return getOrganization(res)
})

module.exports = router