import pool from "../database/db.js";

const getOutbound = async (req,res) => {
    try {
        const outbound = await pool.query (
            "SELECT * FROM outbound_deliveries"
        );
        res.json(outbound.rows)
    } catch (error) {
        console.log('Error in getOutbound:', error.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

const addOutbound = async (req,res) => {
    try {
        const {
            wz_number, delivery_date, from_company, from_street, from_postal_code, from_city,
            to_company, to_street, to_postal_code, to_city, receiving_person, 
            order_number, destination
        } = req.body
        if (!wz_number || !delivery_date || !from_company || !from_street || !from_postal_code || 
            !from_city || !to_company || !to_street || !to_postal_code || !to_city || 
            !receiving_person || !order_number || !destination) {
                return res.status(400).json({error: 'Missing required fields'})
            }
        
            const newOutbound = await pool.query(
                'INSERT INTO outbound_deliveries (wz_number, delivery_date, from_company, from_street, from_postal_code, from_city, ' +
                'to_company, to_street, to_postal_code, to_city, ' +
                'receiving_person, order_number, destination) ' +
                'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
                [wz_number, delivery_date, from_company, from_street, from_postal_code, from_city,
                to_company, to_street, to_postal_code, to_city, receiving_person,
                order_number, destination]
            );
            res.json(newOutbound.rows);
    }   catch (error) {
        console.error('Error in newOutbound:', error.message);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}


const editOutbound = async (req, res) => {
    try {
        const outboundId = req.params.id;
        const { wz_number, delivery_date, from_company, from_street, from_postal_code, from_city,
            to_company, to_street, to_postal_code, to_city, receiving_person, 
            order_number, destination} = req.body;
        const editedAgreement = await pool.query(
            "UPDATE outbound_deliveries SET wz_number = $1, delivery_date = $2, from_company = $3, from_street = $4, from_postal_code = $5, from_city = $6, " +
            "to_company = $7, to_street = $8, to_postal_code = $9, to_city = $10, receiving_person = $11, order_number = $12, destination = $13, " +
            "WHERE id = $14 RETURNING *",
            [wz_number, delivery_date, from_company, from_street, from_postal_code, from_city,
                to_company, to_street, to_postal_code, to_city, receiving_person, 
                order_number, destination, outboundId]
        );
        res.json(editedAgreement.rows);
    } catch (err) {
        console.error(err.message);
    }
};

const deleteOutbound = async (req, res) => {
   try { 
        const outboundId = req.params.id;
        const deleteOutbound = await pool.query(
        'DELETE FROM outbound_deliveries WHERE id = $1 RETURNING wz_number, to_company',
        [outboundId]
        );
        if (deleteOutbound.rowCount === 1) {
            res.json(`Usunięto umowę ${deleteOutbound.rows[0].wz_number} do firmy ${deleteOutbound.rows[0].to_company}`);
        } else {
            res.status(404).json({ error: 'Nie znaleziono umowy o podanym Id' });
        }
    } catch (error) {
            console.error('Error in deleteOutbound:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
}


export {getOutbound, addOutbound, editOutbound, deleteOutbound } 