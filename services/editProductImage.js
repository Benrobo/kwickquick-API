const conn = require("../db/db")
const { Error } = require("../helpers/index")


const updateProductImage = ({ pId, orgId, pImage}, res) => {
    if (orgId === "" || pImage === "" || pId === "") {
        return res.status(400).json(Error("No data provided or some fields are empty", 400))
    }

    // insert into table
    try {
        let sql = `UPDATE products SET "pImage"=$1 WHERE "orId"=$2 AND id=$3`
        conn.query(sql, [pImage, orgId, pId], (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).json(Error("Something went wrong updating item, please try again", 500))
            }

            if(data.rowCount === 0){
                return res.status(404).json(Error("Product cant be updated cause it doest not exist", 404))
            }

            return res.status(200).json({ msg: "Image updated successfully", code: 200 })
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ e, error: Error("Something went wrong", 500) })
    }

}


module.exports = updateProductImage