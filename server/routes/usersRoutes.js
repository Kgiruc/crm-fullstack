import express from "express"
import {getLogin, getLogout, Signup} from "../controllers/userController.js"

const routerUsers = express.Router();

routerUsers.post('/login', getLogin );
routerUsers.post('/register', Signup);
routerUsers.post('/logout', getLogout);

export default routerUsers;