const conn = require("../db/db")
const { Error, compareHash, genRefreshToken, genAccessToken } = require("../helpers/index")


const checkOrgAuth = ({email, password}, res) => {
    if ( email === "" || password === "") {
        return res.status(400).json(Error("No data provided or some data is missing", 400))
    }

    // check if user with that email exists

    try {
        let sql = `SELECT * FROM organizations WHERE "orMail"=$1`
        conn.query(sql, [email], (err, data)=>{
            if (err) {
                console.log(err)
                return res.status(500).json(Error("Something went wrong logging organization in", 500))
            }

            if(data.rowCount === 0){
                // org doesnt exist
                return res.status(404).json(Error("Organization with that email was not found", 404))
            }
            
            let orgData = {
                id: data.rows[0].id,
                email: data.rows[0].orMail
            }

            // check if password matches hash
            let dbHash = data.rows[0].orPassword
            const pwdCheck = compareHash(password, dbHash);

            if(!pwdCheck){
                return res.status(404).json(Error("Password is incorrect", 404))
            }else{

                let refreshToken = genRefreshToken(orgData)
                let accessToken = genAccessToken(orgData)

                // update the refreshToken table in db
                let sql2 = `UPDATE organizations SET "refreshToken"=$1 WHERE "orMail"=$2`
                conn.query(sql2, [refreshToken, email], (err, data)=>{
                    if (err) {
                        console.log(err)
                        return res.status(500).json(Error("Something went wrong logging organization in", 500))
                    }
                    return res.status(200).json({
                        org: orgData,
                        refreshToken,
                        accessToken
                    })
                })

                
            }
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ e, error: Error("Something went wrong", 500) })
    }

}


module.exports = checkOrgAuth