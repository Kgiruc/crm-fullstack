import pool from "../database/db.js";

const addDeliveryItems = async(req, res) => {
    const {deliveryId, itemId} = req.body;
    try {
        const deliveryItems = await pool.query(
            'INSERT INTO outbound_delivery_items (outbound_delivery_id, warehouse_inventory_id) VALUES ($1, $2)',
            [deliveryId, itemId]);
            res.json(deliveryItems.rows);
    } catch (error) {
        console.error('Error in addWarehouseItem:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export {addDeliveryItems}