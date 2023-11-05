import pool from "../database/db.js";

const getwarekhouseItems = async (req, res) => {
    try {
        const warekhouseItems = await pool.query(
            "SELECT * FROM warehouse_inventory;"
        );
        res.json(warekhouseItems.rows);
    } catch (error) {
        console.error('Error in getwarehouseItem:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteWarekhouseItems = async (req, res) => {
    try {
        const warehouseitemId = req.params.id;
        const deletewarehouseItem = await pool.query(
            'DELETE FROM warehouse_inventory WHERE id = $1 RETURNING item_code, item_name',
            [warehouseitemId]
        );
        if (deletewarehouseItem.rowCount === 1) {
            res.json(`Usunięto ${deletewarehouseItem.rows[0].item_code} ${deletewarehouseItem.rows[0].item_name}`);
        } else {
            res.status(404).json({ error: 'Nie znaleziono item o podanym Id' });
        }
    } catch (error) {
        console.error('Error in deleteWarehouse:', error.message);
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
}

const addWarehouseItem = async(req, res) => {
    try {
        const { item_code, item_name, allocated_quantity, unit_of_measure, issued_quantity, unit_price, account_code, synthetic_account_code, stock_quantity } = req.body;
        if (!item_code || !item_name || !allocated_quantity || !unit_of_measure || !issued_quantity || !unit_price || !account_code || !synthetic_account_code || !stock_quantity) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newwarehouseItem = await pool.query(
            'INSERT INTO warehouse_inventory (item_code, item_name, allocated_quantity, unit_of_measure, issued_quantity, unit_price, account_code, synthetic_account_code, stock_quantity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [item_code, item_name, allocated_quantity, unit_of_measure, issued_quantity, unit_price, account_code, synthetic_account_code, stock_quantity]
        );
        res.json(newwarehouseItem.rows);
    } catch (error) {
        console.error('Error in addWarehouseItem:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export {getwarekhouseItems, deleteWarekhouseItems, addWarehouseItem}