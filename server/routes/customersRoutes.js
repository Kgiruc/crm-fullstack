import express from "express"
import { 
    getCustomers,
    addCustomer,
    deleteCustomer,
    editCustomer, 
} from "../controllers/customersController.js";

const routerCustomers = express.Router();

routerCustomers.get('/clients', getCustomers );
routerCustomers.post('/clients', addCustomer );
routerCustomers.delete('/clients/:id', deleteCustomer );
routerCustomers.put('/clients/:id', editCustomer );

export default routerCustomers;
