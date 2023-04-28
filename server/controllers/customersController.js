import pool from "../database/db.js"

const getCustomers = async (req, res) => {
    try {
    const customers = await pool.query('SELECT * FROM customers')
    res.json(customers.rows)
    }
    catch (err) {
        console.log(err)
    }
}

export {getCustomers}