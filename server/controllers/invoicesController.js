import pool from "../database/db.js";

const getInvoices = async (req, res) => {
    try {
        const invoices = await pool.query(
            "SELECT invoices.*, customers.name, customers.surname, customers.e_mail, customers.address, customers.phone_number, " +
            "contracts.name AS contract_name, contracts.date_sign, contracts.date_end, contracts.value " +
            "FROM invoices " +
            "JOIN customers ON invoices.customer_id = customers.id " +
            "JOIN contracts ON invoices.contract_id = contracts.id"
        );
        res.json(invoices.rows);
    } catch (error) {
        console.error('Error in getAgreements:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getCustomerInvoices = async(req, res) => {
    try {
        const invoiceId = req.params.id;
        const invoices = await pool.query(
            'SELECT * FROM invoices WHERE customer_id = $1',
            [invoiceId]
        )
        if (invoices.rowCount > 0) {
            res.json(invoices.rows)
        } else {
            res.status(404).json({ error: 'Brak faktur'})
        }
    } catch (error) {
        console.error('Error in getInvoice:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const deleteInvoices = async (req, res) => {
    try {
        const invoiceId = req.params.id;
        const deletedInvoice = await pool.query(
            'DELETE FROM invoices WHERE id = $1 RETURNING date_issue, amount',
            [invoiceId]
        );
        if (deletedInvoice.rowCount === 1) {
            res.json(`Usunięto umowę ${deletedInvoice.rows[0].date_issue} o wartości ${deletedInvoice.rows[0].amount}`);
        } else {
            res.status(404).json({ error: 'Nie znaleziono faktury o podanym Id' });
        }
    } catch (error) {
        console.error('Error in deleteAgreements:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const addInvoice = async (req, res) => {
    try {
        const { customer_id, contract_id, date_issue, date_due, amount, description, paid } = req.body;
        if (!customer_id || !contract_id || !date_issue || !date_due || !amount || !description || paid===undefined) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newInvoice = await pool.query(
            'INSERT INTO invoices (customer_id, contract_id, date_issue, date_due, amount, description, paid) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [customer_id, contract_id, date_issue, date_due, amount, description, paid]
        );
        res.json(newInvoice.rows);
    } catch (error) {
        console.error('Error in addInvoice:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

  const editInvoices = async (req, res) => {
    try {
        const invoiceId = req.params.id;
        const { customer_id, contract_id, date_issue, date_due, amount, description, paid } = req.body;
        const editedInvoice = await pool.query(
            "UPDATE invoices SET customer_id = $1, contract_id = $2, date_issue = $3, date_due = $4, amount = $5, description = $6, paid = $7 WHERE id = $8 RETURNING *",
            [customer_id, contract_id, date_issue, date_due, amount, description, paid, invoiceId]
        );
        res.json(editedInvoice.rows);
    } catch (error) {
        console.error(error.message);
    }
};

export {getInvoices, getCustomerInvoices, editInvoices, deleteInvoices, addInvoice}