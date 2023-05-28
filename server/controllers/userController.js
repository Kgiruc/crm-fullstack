import pool from "../database/db.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

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
      
      const token = jwt.sign({login}, process.env.ACCESS_TOKEN, {expiresIn: '1hr'})
      res.cookie('accessToken', token, { httpOnly: true });
      res.json({ login: result.rows[0].login, token });
    } catch (error) {
      console.error('Error in Login:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const Signup = async (req, res) => {
    const {login, e_mail, password} = req.body;
    const salt = bcrypt.genSaltSync(4)
    const hashedPassword = bcrypt.hashSync(password, salt)
    try {
      const result = await pool.query(
        `INSERT INTO users (login, e_mail, password) VALUES ($1, $2, $3) RETURNING e_mail;`,
        [login, e_mail, hashedPassword]
        );
      
        const token = jwt.sign({login}, process.env.ACCESS_TOKEN, {expiresIn: '1hr'})
        res.cookie('accessToken', token, { httpOnly: true });
        res.json({ e_mail: result.rows[0].e_mail, token})

    } catch (error) {
      console.error('Error in Login:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  export {getLogin, Signup};