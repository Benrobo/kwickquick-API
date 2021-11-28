const conn = require("../db/db")
const { Error, genId, genPwdHash } = require("../helpers/index")

const getProductsId = (data, res) => {
    let {pId} = data;
    try {
        let cheksql = `SELECT * FROM products WHERE hash=$1`
        conn.query(cheksql,[pId], (err, orgdata) => {
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


module.exports = getProductsId