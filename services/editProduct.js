const conn = require("../db/db")
const { Error } = require("../helpers/index")


const editProductDetails = ({ pId, orId, pName, pNumber, pPrice }, res) => {
    if (orId === "" || pName === "" || pNumber === "" || pPrice === "" || pId === "") {
        return res.status(400).json(Error("No data provided or some fields are empty", 400))
    }

    // insert into table
    try {
        let sql = `UPDATE products SET "pName"=$1 , "pNumber"=$2, "pPrice"=$3 WHERE "orId"=$4 AND id=$5`
        conn.query(sql, [pName, pNumber, pPrice, orId, pId], (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).json(Error("Something went wrong updating item, please try again", 500))
            }

            if(data.rowCount === 0){
                return res.status(404).json(Error("Product cant be updated cause it doest not exist", 404))
            }

            return res.status(200).json({ msg: "Product item updated successfully", code: 200 })
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ e, error: Error("Something went wrong", 500) })
    }

}


module.exports = editProductDetails