import pool from "../database/db.js";

const getAgreements = async(req, res) => {
    try {
        const agreements = await pool.query("SELECT * FROM contracts")
        res.json(agreements.rows)
    }  catch (error) {
        console.error('Error in getCustomers:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}