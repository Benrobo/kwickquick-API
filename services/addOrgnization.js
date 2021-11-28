const conn = require("../db/db")
const { Error, genId, genPwdHash } = require("../helpers/index")


const addOrganization = ({ orgName, email, password, image, orNumber }, res) => {
    if (orgName === "" || email === "" || password === "" || orNumber === "") {
        return res.status(400).json(Error("No data provided", 400))
    }

    let imageApi = `https://avatars.dicebear.com/api/initials/`
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
                return res.status(400).json(Error("Organization with that email already exist", 400))
            }
            else {
                let orgHash = `org-${orgId}`
                let defaultRefreshToken = 0;
                let sql = `INSERT INTO organizations(id,"orName","orMail","orPassword","orLogo","orNumber","orgHash","refreshToken") VALUES($1,$2,$3,$4,$5,$6,$7,$8)`
                conn.query(sql, [orgId, orgName, email, hash, newImg, orNumber, orgHash, defaultRefreshToken], (err) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json(Error("Something went wrong registering organization", 500))
                    }

                    return res.status(200).json({ message: "organzation registered successfully", code: 200 })
                })
            }
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ e, error: Error("Something went wrong", 500) })
    }

}


module.exports = addOrganization