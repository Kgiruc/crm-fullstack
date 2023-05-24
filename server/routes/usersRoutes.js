import express from "express"
import {getLogin, Signup} from "../controllers/userController.js"

const routerUsers = express.Router();

routerUsers.post('/login', getLogin );
routerUsers.post('/signup', Signup)

export default routerUsers;