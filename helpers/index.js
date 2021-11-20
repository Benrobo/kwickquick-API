const bcrypt = require("bcrypt")
const { v4: uuidv4 } = require('uuid');

function genPwdHash(salt, text){
    return bcrypt.hashSync(text, salt)
}

const Error = (msg, code)=>{
    const error = {}
    error.message = msg;
    error.statusCode = code;

    return error;
}

const genId = ()=>{
    return uuidv4()
}

module.exports = {
    Error,
    genPwdHash,
    genId
};