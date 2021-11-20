const jwt = require("jsonwebtoken")

function checkAuth(req, res, next){
    let headers = req.headers["Authorization"];
    
    if(!headers || headers === "" || headersc === undefined){
        return res.status(400).json({msg: "Authorization header is required"})
    }
    else{
        let bearer = headers.split(" ")[1];
        jwt.verify()
    }

    console.log(headers)
}

module.exports = {
    checkAuth
}