const conn = require("../db/db")
const { Error, genId, genPwdHash } = require("../helpers/index")

const getProducts = (res) => {
    try {
        let cheksql = `SELECT * FROM products`
        conn.query(cheksql, (err, orgdata) => {
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


module.exports = getProducts