const conn = require("../db/db")
const { Error, genId } = require("../helpers/index")


const addProducts = ({ pCurrency, orId, pName, pImage, pPrice }, res) => {
    if (orId === "" || pName === "" || pPrice === "" || pCurrency === "") {
        return res.status(400).json(Error("No data provided or some fields are empty", 400))
    }


    let imageApi = `https://avatars.dicebear.com/api/identicon/`
    let productHash = genId();
    let id = genId()
    let newImg = pImage === "" || pImage === undefined ? `${imageApi}temp%20Image.svg` : pImage;

    // insert into table
    try {
        let sql = `INSERT INTO products(id,"orId","pName","pPrice","pImage","hash","pCurrency") VALUES($1,$2,$3,$4,$5,$6,$7)`
        conn.query(sql, [id, orId, pName, pPrice, newImg, productHash, pCurrency], (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).json(Error("Something went wrong adding item, please try again", 500))
            }
            console.log(data)
            return res.status(200).json({ msg: "Product item added successfully", code: 200, productId:productHash })
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ e, error: Error("Something went wrong", 500) })
    }

}


module.exports = addProducts