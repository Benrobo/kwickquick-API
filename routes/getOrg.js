const express = require("express");
const router = express.Router();


const getOrganization = require("../services/getOrg");


const {checkAuth} = require("../middlewares/auth")


router.get("/organizations",checkAuth, (req, res)=>{
    return getOrganization(res)
})

module.exports = router