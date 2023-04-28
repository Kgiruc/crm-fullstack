import express from "express"
import { 
    getCustomers 
} from "../controllers/customersController.js";

const routerCustomers = express.Router();

routerCustomers.get('/', getCustomers );

export default routerCustomers;
