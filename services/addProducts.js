const conn = require("../db/db")
const { Error, genId } = require("../helpers/index")


const addProducts = ({pCurrency, orId, pName, pImage, pNumber, pPrice }, res) => {
    if (orId === "" || pName === "" || pNumber === "" || pPrice === "" || pCurrency === "") {
        return res.status(400).json(Error("No data provided or some fields are empty", 400))
    }


    let imageApi = `https://avatars.dicebear.com/api/identicon/`
    let productHash = genId()
    let id = genId()
    let newImg = pImage === "" || pImage === undefined ? `${imageApi}${orgName}.svg` : pImage;

    // insert into table
    try {
        let sql = `INSERT INTO products(id,"orId","pName","pPrice","pImage","pNumber","hash","pCurrency") VALUES($1,$2,$3,$4,$5,$6,$7,$8)`
        conn.query(sql, [id, orId, pName, pPrice, newImg, pNumber, productHash, pCurrency], (err) => {
            if (err) {
                console.log(err)
                return res.status(500).json(Error("Something went wrong adding item, please try again", 500))
            }

            return res.status(200).json({ msg: "Product item added successfully", code: 200 })
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ e, error: Error("Something went wrong", 500) })
    }

}


module.exports = addProducts