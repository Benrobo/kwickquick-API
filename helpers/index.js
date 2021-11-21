const bcrypt = require("bcrypt")
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken")

function genPwdHash(salt, text) {
    return bcrypt.hashSync(text, salt)
}

// function genProductHash(data){
//     return jwt.sign()
// }

function compareHash(pwd, hash){
    return bcrypt.compareSync(pwd, hash)
}

const Error = (msg, code) => {
    const error = {}
    error.message = msg;
    error.statusCode = code;

    return error;
}

const genId = () => {
    return uuidv4()
}

const genRefreshToken = (data) => {
    return jwt.sign(data, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "1yr",
    })
}

const genAccessToken = (data) => {
    return jwt.sign(data, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "2hr",
    })
}

module.exports = {
    Error,
    genPwdHash,
    genId,
    genRefreshToken,
    genAccessToken,
    compareHash
};