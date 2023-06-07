import express from "express"
import { 
    getCustomers,
    addCustomer,
    deleteCustomer,
    editCustomer, 
} from "../controllers/customersController.js";

const routerCustomers = express.Router();

routerCustomers.get('/', getCustomers);
routerCustomers.post('/', addCustomer);
routerCustomers.delete('/:id', deleteCustomer);
routerCustomers.put('/:id', editCustomer);

export default routerCustomers;
