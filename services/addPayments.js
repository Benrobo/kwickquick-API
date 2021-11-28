const conn = require("../db/db")
const { Error, genId } = require("../helpers/index")


const addPayments = ({ pCurrency, cName, method, orId, orHash, pName, total }, res) => {
    if (orId === "" || orHash === "" || pName === "" || total === "" || pCurrency === "" || cName === "" || method === "") {
        return res.status(400).json(Error("No data provided or some fields are empty", 400))
    }

    let id = genId()
    let status = "pending"
    
    // insert into table
    try {
        let sql = `INSERT INTO payments(id,"cName","total","paymentMethod","orgId","orgHash",status) VALUES($1,$2,$3,$4,$5,$6,$7)`

        conn.query(sql, [id, cName,total,method,orId,orHash,status], (err, data)=>{
            if (err) {
                console.log(err)
                return res.status(500).json(Error("Something went wrong getting organization products", 500))
            }

            if(data.rowCount === 0){
                return res.status(400).json(Error("Something went wrong payment failed,either org id does not exist", 400))
            }

            return res.status(200).json({message: "Payment successfull", code: 200})
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ e, error: Error("Something went wrong", 500) })
    }

}


module.exports = addPayments