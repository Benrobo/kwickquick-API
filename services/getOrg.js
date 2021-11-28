const conn = require("../db/db")
const { Error, genId, genPwdHash } = require("../helpers/index")

const getOrganization = (data, res) => {
    let { orgHash } = data;
    try {
        // check if organization with email exist
        let isExist = false;
        let cheksql = `SELECT * FROM organizations WHERE "orgHash"=$1`
        conn.query(cheksql, [orgHash], (err, orgdata) => {
            if (err) {
                console.log(err)
                return res.status(500).json(Error("Something went wrong registering organization", 500))
            }

            return res.status(200).json(orgdata.rows)
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ e, error: Error("Something went wrong", 500) })
    }

}


module.exports = getOrganization