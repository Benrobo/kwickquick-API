const conn = require("../db/db")
const { Error } = require("../helpers/index")

const getOrgProducts = (data, res) => {
    let { orgId } = data;
    console.log(data)
    try {
        let cheksql = `SELECT * FROM products WHERE "orId"=$1 ORDER BY "pDate" DESC`
        conn.query(cheksql, [orgId], (err, orgdata) => {
            if (err) {
                console.log(err)
                return res.status(500).json(Error("Something went wrong getting organization products", 500))
            }

            console.log(orgdata)

            return res.status(200).json(orgdata.rows)
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ e, error: Error("Something went wrong", 500) })
    }

}


module.exports = getOrgProducts