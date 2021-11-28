const express = require("express");
const router = express.Router();


const getOrganization = require("../services/getOrg");


router.post("/getOrganizations", (req, res) => {
    let data = req.body;
    return getOrganization(data, res)
})

module.exports = router