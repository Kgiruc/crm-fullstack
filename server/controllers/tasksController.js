import pool from "../database/db.js";

const getTasks = async (req, res) => {
    try {
        const tasks = await pool.query(
            "SELECT * FROM tasks"
        );
        res.json(tasks.rows);
    } catch(error) {
        console.error('Error in getTasks:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteTasks = async (req, res) => {
    try {
        const taskId = req.params.id;
        const deletedTask = await pool.query(
            'DELETE FROM tasks WHERE id = $1 RETURNING title, status',
            [taskId]
        );
        if (deletedTask.rowCount === 1) {
            res.json(`Usunięto zadanie ${deletedTask.rows[0].title} o wartości ${deletedTask.rows[0].status}`);
        } else {
            res.status(404).json({ error: 'Nie znaleziono zadania o podanym Id' });
        }
    } catch (error) {
        console.error('Error in deleteTask:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const addTasks = async (req, res) => {
    try {
        const { title, description, due_date, priority, status } = req.body;
        if (!title || !description || !due_date || !priority || !status) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newTask = await pool.query(
            'INSERT INTO tasks (title, description, due_date, priority, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [title, description, due_date, priority, status]
        );
        res.json(newTask.rows);
    } catch (error) {
        console.error('Error in addInvoice:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const editTasks = async (req, res) => {
    try {
        const taskId = req.params.id;
        const { title, description, date_due, priority, status } = req.body
        const editedTask = await pool.query(
            "UPDATE invoices SET customer_id = $1, contract_id = $2, date_issue = $3, date_due = $4, amount = $5, description = $6, paid = $7 WHERE id = $8 RETURNING *",
            [title, description, date_due, priority, status, taskId]
        );
        res.json(editedTask.rows);
    } catch (error) {
        console.error(error.message);
    }
};

export {getTasks, deleteTasks, editTasks,addTasks }