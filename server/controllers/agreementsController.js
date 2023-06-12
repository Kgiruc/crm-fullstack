import pool from "../database/db.js";

const getAgreements = async (req, res) => {
    try {
        const agreements = await pool.query(
            "SELECT contracts.*, customers.name, customers.surname, customers.e_mail, customers.address, customers.phone_number " +
            "FROM contracts " +
            "JOIN customers ON contracts.customer_id = customers.id;"
        );
        res.json(agreements.rows);
    } catch (error) {
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
        console.error('Error in getCustomer:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const deleteAgreements = async (req, res) => {
    try {
        const agreementId = req.params.id;
        const deletedAgreement = await pool.query(
            'DELETE FROM contracts WHERE id = $1 RETURNING title, value',
            [agreementId]
        );
        if (deletedAgreement.rowCount === 1) {
            res.json(`Usunięto umowę ${deletedAgreement.rows[0].title} o wartości ${deletedAgreement.rows[0].value}`);
        } else {
            res.status(404).json({ error: 'Nie znaleziono umowy o podanym Id' });
        }
    } catch (error) {
        console.error('Error in deleteAgreements:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const addAgreements = async (req, res) => {
    try {
      const { customer_id, title, date_sign, date_end, value, description  } = req.body;
      if (!customer_id || !title || !date_sign || !date_end || !value || !description) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      const newAgreement = await pool.query(
        'INSERT INTO contracts (customer_id, title, date_sign, date_end, value, description)  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [customer_id, title, date_sign, date_end, value, description]
      );
      res.json(newAgreement.rows);
    } catch (error) {
      console.error('Error in newAgreement:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const editAgreement = async (req, res) => {
    try {
        const agreementId = req.params.id;
        const { customer_id, title, date_sign, date_end, value, description } = req.body;
        const editedAgreement = await pool.query(
            "UPDATE contracts SET customer_id = $1, title = $2, date_sign = $3, date_end = $4, value = $5, description = $6 WHERE id = $7 RETURNING *",
            [customer_id, title, date_sign, date_end, value, description, agreementId]
        );
        res.json(editedAgreement.rows);
    } catch (err) {
        console.error(err.message);
    }
};

export {getAgreements, getCustomerAgreements, deleteAgreements, addAgreements, editAgreement} 