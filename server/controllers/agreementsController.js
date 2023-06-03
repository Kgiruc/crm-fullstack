import pool from "../database/db.js";

const getAgreements = async(req, res) => {
    try {
        const agreements = await pool.query("SELECT * FROM contracts")
        res.json(agreements.rows)
    }  catch (error) {
        console.error('Error in getAgreements:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const getCustomerAgreements = async(req, res) => {
    try {
        const customerId = req.params.id;
        const agreements = await pool.query(
            'SELECT * FROM contracts WHERE customer_id = $1 RETURNING *',
            [customerId]
        )
        if (agreements.rowCount > 0) {
            res.json(agreements)
        } else {
            res.status(404).json({ error: 'Brak umów'})
        }
    } catch (error) {
        console.error('Error in deleteCustomer:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export {getAgreements} 