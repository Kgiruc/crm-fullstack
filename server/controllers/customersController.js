import pool from "../database/db.js"

const getCustomers = async (req, res) => {
    try {
        const customers = await pool.query('SELECT * FROM customers')
        res.json(customers.rows)
    } catch (err) {
        console.log(err)
    }
}

const addCustomers = async (req, res) => {
    try {
        const { name, surname, e_mail, phone_number, address, notes } = req.body;
        const newCustomer = await pool.query(
            "INSERT INTO customers (name,surname, e_mail, phone_number, address, notes) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [name, surname, e_mail, phone_number, address, notes]
        );
        res.json(newCustomer.rows);
    } catch (err) {
        console.log(err)
    }
}

export { getCustomers, addCustomers }