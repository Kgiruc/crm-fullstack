import express from "express"
import { addTasks, deleteTasks, editTasks, getTasks } from "../controllers/tasksController.js";

const routerTasks = express.Router();

routerTasks.get('/', getTasks)
routerTasks.post('/', addTasks)
routerTasks.delete('/:id', deleteTasks)
routerTasks.put('/:id', editTasks)

export default routerTasks;
