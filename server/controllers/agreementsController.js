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
            'SELECT * FROM contracts WHERE customer_id = $1',
            [customerId]
        )
        if (agreements.rowCount > 0) {
            res.json(agreements.rows)
        } else {
            res.status(404).json({ error: 'Brak umów'})
        }
    } catch (error) {
        console.error('Error in deleteCustomer:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const deleteAgreements = async (req, res) => {
    try {
        const agreementId = req.params.id;
        const deletedAgreement = await pool.query(
            'DELETE FROM contracts WHERE id = $1 RETURNING name, value',
            [agreementId]
        );
        if (deletedAgreement.rowCount === 1) {
            res.json(`Usunięto umowę ${deletedAgreement.rows[0].name} o wartości ${deletedAgreement.rows[0].value}`);
        } else {
            res.status(404).json({ error: 'Nie znaleziono umowy o podanym Id' });
        }
    } catch (error) {
        console.error('Error in deleteAgreements:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export {getAgreements, getCustomerAgreements, deleteAgreements} 