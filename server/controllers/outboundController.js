import pool from "../database/db";

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
            receiving_person_phone, receiving_person_email,remarks
        } = req.body
        if (!wz_number || !delivery_date || !from_company || !from_street || !from_postal_code || 
            !from_city || !to_company || !to_street || !to_postal_code || !to_city || 
            !receiving_person || receiving_person_phone || !receiving_person_email) {
                return res.status(400).json({error: 'Missing required fields'})
            }
        
        const newOutbound = await pool.query (
            'INSERT INTO outbound_deliveries (wz_number, delivery_date, from_company, from_street' +
            'from_postal_code, from_city,to_company, to_street, to_postal_code, to_city' +
            'receiving_person, receiving_person_phone, receiving_person_email,remarks)' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *'
            [wz_number, delivery_date, from_company, from_street, from_postal_code, from_city,
            to_company, to_street, to_postal_code, to_city, receiving_person, 
            receiving_person_phone, receiving_person_email,remarks]
            );
            res.json(newOutbound.rows);
    }   catch (error) {
        console.error('Error in newOutbound:', error.message);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export {getOutbound, addOutbound} 