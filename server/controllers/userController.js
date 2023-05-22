import pool from "../database/db.js"


const getLogin = async (req, res) => {
    try {
      const { login, password } = req.body;
      const result = await pool.query(
        `SELECT * FROM users WHERE login = $1 AND password = crypt($2, password)`,
        [login, password]
      );

      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid login' });
      }

      res.json(result.rows);
    } catch (error) {
      console.error('Error in Login:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export default getLogin;