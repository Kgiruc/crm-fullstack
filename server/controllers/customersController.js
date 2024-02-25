import pool from "../database/db.js";

const getCustomers = async (req, res) => {
  try {
    const customers = await pool.query('SELECT * FROM customers');
    res.json(customers.rows);
  } catch (error) {
    console.error('Error in getCustomers:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addCustomer = async (req, res) => {
  try {
    const { 
      name, 
      surname, 
      e_mail, 
      phone_number, 
      address, 
      birthday, 
      country, 
      gender, 
      state, 
      zipcode,
      bio } = req.body;

    if (!name || !surname || !e_mail || !phone_number || !address || !birthday || !country || !gender || !zipcode) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newCustomer = await pool.query(
      'INSERT INTO customers (name, surname, e_mail, phone_number, address, birthday, country, gender, state, zipcode, bio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
      [name, surname, e_mail, phone_number, address, birthday, country, gender, state, zipcode, bio]
    );

    res.json(newCustomer.rows);
  } catch (error) {
    console.error('Error in addCustomer:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const deletedCustomer = await pool.query(
      'DELETE FROM customers WHERE id = $1 RETURNING name, surname',
      [customerId]
    );
    if (deletedCustomer.rowCount === 1) {
      res.json(`Usunięto klienta ${deletedCustomer.rows[0].name} ${deletedCustomer.rows[0].surname}`);
    } else {
      res.status(404).json({ error: 'Nie znaleziono klienta o podanym Id' });
    }
  } catch (error) {
    console.error('Error in deleteCustomer:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const { name, surname, e_mail, phone_number, address, notes } = req.body;
    const editedCustomer = await pool.query(
        "UPDATE customers SET name = $1, surname = $2, e_mail = $3, phone_number = $4, address = $5, notes = $6 WHERE id = $7 RETURNING *",
        [name, surname, e_mail, phone_number, address, notes, customerId]
    );
    res.json(editedCustomer.rows);
  } catch (err) {
      console.error(err.message);
    }
};

const filterCustomer = async (req, res) => {
  try {
    const { searchTerm } = req.params;
    const filteredCustomers = await pool.query(
      "SELECT * FROM customers WHERE name ILIKE $1 OR surname ILIKE $1 OR e_mail ILIKE $1 OR phone_number ILIKE $1",
      [`%${searchTerm}%`]
    );
    res.json(filteredCustomers.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

export { getCustomers, addCustomer, deleteCustomer, editCustomer, filterCustomer };