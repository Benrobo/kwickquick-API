const conn = require("../db/db")
const { Error } = require("../helpers/index")


const deleteProduct = ({ pId, orId }, res) => {
    if (orId === "" || pId === "") {
        return res.status(400).json(Error("No data provided or some fields are empty", 400))
    }

    // insert into table
    try {
        let sql = `DELETE FROM products WHERE "orId"=$1 AND id=$2`
        conn.query(sql, [orId, pId], (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).json(Error("Something went wrong deleting item, please try again", 500))
            }

            if(data.rowCount === 0){
                return res.status(404).json(Error("Product cant be deleted cause it doest not exist", 404))
            }

            return res.status(200).json({ msg: "Product item deleted successfully", code: 200 })
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ e, error: Error("Something went wrong", 500) })
    }

}


module.exports = deleteProduct