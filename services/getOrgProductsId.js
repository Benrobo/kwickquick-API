const conn = require("../db/db")
const { Error } = require("../helpers/index")

const getOrgProductsId = (data, res) => {
    let { orgId, pId } = data;
    console.log(data)
    try {
        let cheksql = `SELECT * FROM products WHERE "orId"=$1 and id=$2 ORDER BY "pDate" DESC`
        conn.query(cheksql, [orgId, pId], (err, orgdata) => {
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


module.exports = getOrgProductsId