import express from "express"
import { 
    getCustomers,
    addCustomers 
} from "../controllers/customersController.js";

const routerCustomers = express.Router();

routerCustomers.get('/', getCustomers );
routerCustomers.post('/', addCustomers );

export default routerCustomers;
