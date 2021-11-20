const conn = require("../db/db")
const { Error, genId, genPwdHash } = require("../helpers/index")


const addProducts = ({ orgName, email, password, image, orNumber }, res) => {
    if (orgName === "" || email === "" || password === "" || orNumber === "") {
        return res.status(400).json(Error("No data provided", 400))
    }

    let orgId = genId()
    let newImg = image === "" || image === undefined ? `${imageApi}${orgName}.svg` : image;
    let hash = genPwdHash(10, password);

    // insert into table
    try {
        // check if organization with email exist
        let isExist = false;
        let cheksql = `SELECT * FROM organizations WHERE "orMail"=$1`
        conn.query(cheksql, [email], (err, orgdata) => {
            if (err) {
                console.log(err)
                return res.status(500).json(Error("Something went wrong registering organization", 500))
            }

            if (orgdata.rowCount > 0) {
                return res.status(200).json(Error("Organization with that email already exist", 200))
            }
            else {
                let defaultRefreshToken = 0;
                let sql = `INSERT INTO organizations(id,"orName","orMail","orPassword","orLogo","orNumber","refreshToken") VALUES($1,$2,$3,$4,$5,$6,$7)`
                conn.query(sql, [orgId, orgName, email, hash, newImg, orNumber, defaultRefreshToken], (err) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json(Error("Something went wrong registering organization", 500))
                    }

                    return res.status(200).json({ msg: "organzation registered successfully", code: 200 })
                })
            }
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ e, error: Error("Something went wrong", 500) })
    }

}


module.exports = addProducts