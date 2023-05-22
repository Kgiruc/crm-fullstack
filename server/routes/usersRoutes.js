import express from "express"
import getLogin from "../controllers/userController.js";

const routerUsers = express.Router();

routerUsers.get('/users', getLogin)

export default routerUsers;